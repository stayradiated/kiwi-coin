import { setTimeout } from 'timers/promises'
import { inspect } from 'util'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import {
  createCachedFetchFn,
  marketPriceSources,
  currencySources,
} from '@stayradiated/market-price'
import debug from 'debug'
import { errorBoundary } from '@stayradiated/error-boundary'

import {
  Market,
  MARKET_BINANCE_US,
  MARKET_DASSET,
  MARKET_KIWI_COIN,
  MARKET_EASY_CRYPTO,
  getMarketUID,
} from '../market/index.js'

import type { Config, Component, Pool } from '../../types.js'

const log = debug('market-price')

const SLEEP_MS = 60 * 1000

type InsertMarketPriceOptions = {
  timestamp: Date
  market: Market
  price: number
  currency: Currency
  fxRate: number
  priceNZD: number
}

const insertMarketPrice = async (
  pool: Pool,
  options: InsertMarketPriceOptions,
): Promise<void | Error> => {
  const { timestamp, market, price, currency, fxRate, priceNZD } = options

  const marketUID = await getMarketUID(pool, market)
  if (marketUID instanceof Error) {
    return marketUID
  }

  const now = new Date()
  const marketPrice: s.market_price.Insertable = {
    created_at: now,
    updated_at: now,
    timestamp,
    market_uid: marketUID,
    price,
    currency,
    fx_rate: fxRate,
    price_nzd: priceNZD,
  }

  const result = await errorBoundary(async () =>
    db.sql<s.market_price.SQL>`
    INSERT INTO ${'market_price'} (${db.cols(marketPrice)})
    VALUES (${db.vals(marketPrice)})`.run(pool),
  )
  if (result instanceof Error) {
    return result
  }
}

enum Currency {
  USD = 'USD',
  NZD = 'NZD',
}

type CurrencyConfig = {
  readonly currency: Currency
  readonly createFetchRateFn: (config: Config) => () => Promise<number | Error>
}

const currencyConfigList: readonly CurrencyConfig[] = [
  {
    currency: Currency.NZD,
    createFetchRateFn: () => async () => Promise.resolve(1),
  },
  {
    currency: Currency.USD,
    createFetchRateFn: (config: Config) =>
      createCachedFetchFn(currencySources.USD_NZD, {
        config: config.openExchangeRates,
      }),
  },
]

type MarketPriceConfig = {
  readonly market: Market
  readonly currency: Currency
  readonly createFetchPriceFn: (config: Config) => () => Promise<number | Error>
}

type MarketPriceInstance = MarketPriceConfig & {
  readonly fetchPrice: () => Promise<number | Error>
}

const marketPriceConfigList: readonly MarketPriceConfig[] = [
  {
    market: MARKET_BINANCE_US,
    currency: Currency.USD,
    createFetchPriceFn: () =>
      createCachedFetchFn(marketPriceSources.binance, {}),
  },
  {
    market: MARKET_DASSET,
    currency: Currency.NZD,
    createFetchPriceFn: (config) =>
      createCachedFetchFn(marketPriceSources.dasset, {
        config: config.dasset,
      }),
  },
  {
    market: MARKET_KIWI_COIN,
    currency: Currency.NZD,
    createFetchPriceFn: () =>
      createCachedFetchFn(marketPriceSources.kiwiCoin, {}),
  },
  {
    market: MARKET_EASY_CRYPTO,
    currency: Currency.NZD,
    createFetchPriceFn: () =>
      createCachedFetchFn(marketPriceSources.easyCrypto, {}),
  },
]

const fetchMarketPrice: Component = async (props): Promise<void> => {
  const { config, pool } = props

  const currencyFnList = currencyConfigList.map((currencyConfig) => {
    const { createFetchRateFn } = currencyConfig
    return {
      ...currencyConfig,
      fetchRate: createFetchRateFn(config),
    }
  })

  const fetchCurrencyRate = async (
    currency: Currency,
  ): Promise<number | Error> => {
    if (currency === Currency.NZD) {
      return 1
    }

    const currencyConfig = currencyFnList.find(
      (currencyConfig) => currencyConfig.currency === currency,
    )
    if (!currencyConfig) {
      return new Error(
        `Could not find currency config for ${inspect(currency)}.`,
      )
    }

    return currencyConfig.fetchRate()
  }

  const marketPriceInstanceList: MarketPriceInstance[] =
    marketPriceConfigList.map((marketPriceConfig) => {
      const { createFetchPriceFn } = marketPriceConfig
      return {
        ...marketPriceConfig,
        fetchPrice: createFetchPriceFn(config),
      }
    })

  const initLoop = async (marketPriceInstance: MarketPriceInstance) => {
    const loop = async (): Promise<void> => {
      const { market, fetchPrice, currency } = marketPriceInstance
      const timestamp = new Date()

      const [price, fxRate] = await Promise.all([
        fetchPrice(),
        fetchCurrencyRate(currency),
      ])

      if (price instanceof Error) {
        log(price)
      } else if (fxRate instanceof Error) {
        log(fxRate)
      } else {
        const priceNZD = price * fxRate

        await insertMarketPrice(pool, {
          timestamp,
          market,
          price,
          currency,
          fxRate,
          priceNZD,
        })
      }

      await setTimeout(SLEEP_MS)
      await loop()
    }

    return loop()
  }

  await Promise.all(
    marketPriceInstanceList.map(async (instance) => initLoop(instance)),
  )
}

export { fetchMarketPrice }

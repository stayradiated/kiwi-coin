import { DateTime } from 'luxon'
import type { Argv } from 'yargs'

import { graphql } from '../../utils/graphql.js'
import { getAuthHeaders } from '../../utils/auth.js'
import { createHandler } from '../../utils/create-handler.js'

import { drawTable } from './draw-table.js'
import type { RowData } from './types.js'

export const command = 'market-price'

export const desc = 'Print current market price'

type Options = {
  symbol: string
}

export const builder = (yargs: Argv) =>
  yargs.option('symbol', {
    alias: 's',
    type: 'string',
    required: true,
  })

type GetMarketPriceResult = {
  data: {
    kc_market: Array<{
      name: string
      market_prices: Array<{
        timestamp: string
        symbol: string
        currency: string
        fx_rate: number
        price: number
        price_nzd: number
      }>
    }>
  }
}

const QUERY_GET_MARKET_PRICE = `
query getMarketPrice($symbol: String!) {
  kc_market {
    name
    market_prices(
      where: { symbol: { _eq: $symbol } },
      order_by:{timestamp:desc},
      limit: 1
    ) {
      timestamp
      symbol
      currency
      fx_rate
      price
      price_nzd
    }
  }
}
`

export const handler = createHandler<Options>(async (config, argv) => {
  const { symbol } = argv

  const authHeaders = await getAuthHeaders(config)
  if (authHeaders instanceof Error) {
    return authHeaders
  }

  const result = await graphql<GetMarketPriceResult>({
    endpoint: config.endpoint,
    headers: authHeaders,
    query: QUERY_GET_MARKET_PRICE,
    variables: { symbol },
  })
  if (result instanceof Error) {
    return result
  }

  const rowData = result.data.kc_market.map<RowData|undefined>((market) => {
    const marketPrice = market.market_prices[0]
    if (!marketPrice) {
      return undefined
    }

    return {
      marketName: market.name,
      timestamp: DateTime.fromISO(marketPrice.timestamp),
      symbol: marketPrice.symbol,
      currency: marketPrice.currency,
      fxRate: marketPrice.fx_rate,
      price: marketPrice.price,
      priceNZD: marketPrice.price_nzd,
    }
  }).filter(Boolean) as RowData[]

  console.log(drawTable(rowData))
  return undefined
})
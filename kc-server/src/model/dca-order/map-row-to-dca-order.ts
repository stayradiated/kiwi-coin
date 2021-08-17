import { DateTime } from 'luxon'
import * as s from 'zapatos/schema'

import type { DCAOrder } from './types.js'

const mapRowToDCAOrder = (row: s.dca_order.JSONSelectable): DCAOrder => ({
  UID: row.uid,
  userUID: row.user_uid,
  exchangeUID: row.exchange_uid,
  userExchangeKeysUID: row.user_exchange_keys_uid,
  marketUID: row.market_uid,
  assetSymbol: row.asset_symbol,
  startAt: DateTime.fromISO(row.start_at),
  marketOffset: row.market_offset,
  dailyAverage: row.daily_average,
  minPriceNZD: row.min_price_nzd ?? undefined,
  maxPriceNZD: row.max_price_nzd ?? undefined,
  minAmountNZD: row.min_amount_nzd ?? undefined,
  maxAmountNZD: row.max_amount_nzd ?? undefined,
  enabledAt: row.enabled_at ? DateTime.fromISO(row.enabled_at) : undefined,
})

export { mapRowToDCAOrder }

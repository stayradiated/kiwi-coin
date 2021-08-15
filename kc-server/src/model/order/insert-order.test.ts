import { DateTime } from 'luxon'
import * as db from 'zapatos/db'
import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { insertOrder, InsertOrderOptions } from './insert-order.js'
import type { Order } from './types.js'

test('insertOrder', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()

  const input: InsertOrderOptions = {
    userUID,
    exchangeUID,
    orderID: 'insert-order',
    assetSymbol: 'BTC',
    priceNZD: 50_000,
    amount: 2,
    type: 'SELL',
    openedAt: DateTime.local(),
    closedAt: undefined,
  }

  const result = await throwIfError<Order>(insertOrder(pool, input))

  t.like(result, input)
  t.is('string', typeof result.UID)

  const row = await db.selectExactlyOne('order', { uid: result.UID }).run(pool)
  t.like(row, {
    order_id: input.orderID,
    uid: result.UID,
    type: input.type,
    price_nzd: input.priceNZD,
    amount: input.amount,
    asset_symbol: input.assetSymbol,
    user_uid: input.userUID,
    closed_at: null,
    exchange_uid: input.exchangeUID,
  })

  t.is(input.openedAt.valueOf(), DateTime.fromISO(row.opened_at).valueOf())
  t.is('string', typeof row.created_at)
  t.is('string', typeof row.updated_at)
})

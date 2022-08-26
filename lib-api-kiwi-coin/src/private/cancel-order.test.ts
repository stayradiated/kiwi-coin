import test from 'ava'
import nock from 'nock'
import { assertOk, assertError } from '@stayradiated/error-boundary'

import { cancelOrder } from './cancel-order.js'

nock.disableNetConnect()

const config = {
  userId: 'user-id',
  apiKey: 'api-key',
  apiSecret: 'api-secret',
}

type RequestBody = {
  id: string
}

test('should return true', async (t) => {
  const orderId = 12_345

  nock('https://kiwi-coin.com')
    .post(
      '/api/cancel_order',
      (body: RequestBody) => body.id === String(orderId),
    )
    .reply(200, JSON.stringify(true))

  const [result] = await cancelOrder({ config, orderId })
  assertOk(result)

  t.is(result, true)
})

test('should return API error', async (t) => {
  const orderId = 98_765

  nock('https://kiwi-coin.com')
    .post(
      '/api/cancel_order',
      (body: RequestBody) => body.id === String(orderId),
    )
    .reply(200, JSON.stringify({ error: 'Unauthorized' }))

  const [result] = await cancelOrder({ config, orderId })

  assertError(result)

  t.is(
    result.message,
    'E_API: Received error from POST https://kiwi-coin.com/api/cancel_order',
  )
})

import * as dasset from '@stayradiated/dasset-api'
import { errorListBoundary } from '@stayradiated/error-boundary'
import { DateTime } from 'luxon'

import { updateOrder, Order } from '../../models/order/index.js'
import { explainError } from '../../utils/error.js'
import type { Pool } from '../../types.js'

const closeOrders = async (
  pool: Pool,
  config: dasset.Config,
  openOrders: Order[],
): Promise<void | Error> => {
  const error = await errorListBoundary(async () =>
    Promise.all(
      openOrders.map(async (order): Promise<void | Error> => {
        const error = await dasset.cancelOrder(config, order.ID)
        if (
          error instanceof dasset.APIError &&
          error.response.code === dasset.APIErrorCode.PreconditionFailed
        ) {
          console.error(error)
        } else if (error instanceof Error) {
          return explainError(
            'Failed to cancel order',
            { orderID: order.ID },
            error,
          )
        }

        await updateOrder(pool, {
          UID: order.UID,
          closedAt: DateTime.local(),
        })
      }),
    ),
  )
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { closeOrders }

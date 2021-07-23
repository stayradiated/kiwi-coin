import * as s from 'zapatos/schema'
import { DateTime } from 'luxon'

import { keyring } from '../../utils/keyring.js'
import type { UserExchangeKeys } from './types.js'

const mapRowToUserExchangeKeys = (
  row: s.user_exchange_keys.JSONSelectable,
): UserExchangeKeys | Error => {
  const jsonKeys = keyring.decrypt(row.keys_encrypted, row.keys_keyring_id)
  if (jsonKeys instanceof Error) {
    return jsonKeys
  }

  const keys = JSON.parse(jsonKeys) as Record<string, string>
  return {
    UID: row.uid,
    userUID: row.user_uid,
    exchangeUID: row.exchange_uid,
    keys,
    description: row.description,
    invalidatedAt: row.invalidated_at
      ? DateTime.fromISO(row.invalidated_at)
      : undefined,
  }
}

export { mapRowToUserExchangeKeys }

import { DateTime } from 'luxon'

import * as store from './store'

export type UserSession = {
  role: 'user'
  userUID: string
  email: string
  authToken: string
  expiresAt: DateTime
}

export type GuestSession = {
  role: 'guest'
  userUID: undefined
  email: undefined
  authToken: undefined
  expiresAt: undefined
}

export type Session = UserSession | GuestSession

const GUEST_SESSION: GuestSession = {
  role: 'guest',
  userUID: undefined,
  email: undefined,
  authToken: undefined,
  expiresAt: undefined,
}

const getSession = (): Session => {
  const session = store.get('session')
  if (session === null) {
    return GUEST_SESSION
  }

  const local = JSON.parse(session) as Record<string, unknown>
  if (local == null || typeof local !== 'object') {
    return GUEST_SESSION
  }

  if (local.role === 'user') {
    if (
      typeof local.email !== 'string' ||
      typeof local.userUID !== 'string' ||
      typeof local.authToken !== 'string' ||
      typeof local.expiresAt !== 'string'
    ) {
      return GUEST_SESSION
    }

    return {
      role: 'user',
      email: local.email,
      userUID: local.userUID,
      authToken: local.authToken,
      expiresAt: DateTime.fromISO(local.expiresAt),
    }
  }

  if (local.role === 'guest') {
    return GUEST_SESSION
  }

  return GUEST_SESSION
}

const setSession = (session: Session): void => {
  store.set('session', JSON.stringify(session))
}

const clearSession = (): void => {
  store.remove('session')
}

export { GUEST_SESSION, getSession, setSession, clearSession }

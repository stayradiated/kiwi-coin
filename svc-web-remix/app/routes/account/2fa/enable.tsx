import { useLoaderData, useActionData } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { promiseHash } from 'remix-utils'
import { errorBoundary } from '@stayradiated/error-boundary'

import { UserFormSetup2FA } from '~/components/user-form-setup-2fa'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import type { SetupUser2FaQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

type ActionData = {
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const formData = await request.formData()
  const token = formData.get('token')
  invariant(typeof token === 'string', 'Must have token.')
  const secret = formData.get('secret')
  invariant(typeof secret === 'string', 'Must have secret.')

  const result = await errorBoundary(async () =>
    sdk.enableUser2FA(
      {
        name: 'Name?',
        secret,
        token,
      },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )

  if (result instanceof Error) {
    return json<ActionData>({ error: result.message })
  }

  return null
}

type LoaderData = {
  query: {
    setupUser2FA: SetupUser2FaQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const user2FA = await sdk.getUser2FA(
    {},
    { authorization: `Bearer ${authToken}`, 'x-hasura-role': 'user' },
  )
  if (typeof user2FA.user[0].user2fa?.uid === 'string') {
    return redirect('/account/2fa')
  }

  const query = await promiseHash({
    setupUser2FA: sdk.setupUser2FA(
      {},
      { authorization: `Bearer ${authToken}`, 'x-hasura-role': 'user' },
    ),
  })

  return json<LoaderData>({ query })
}

const Account = () => {
  const { query } = useLoaderData<LoaderData>()
  const actionData = useActionData<ActionData>()
  const error = actionData?.error

  return (
    <>
      <Card>
        <UserFormSetup2FA query={query.setupUser2FA} error={error} />
      </Card>
    </>
  )
}

export default Account

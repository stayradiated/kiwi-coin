import ky from 'ky-universal'
import { HTTPError } from 'ky'
import { errorBoundary } from '@stayradiated/error-boundary'

type GraphqlOptions<Variables> = {
  endpoint: string
  headers: Record<string, string>
  query: string
  variables: Variables
}

type GraphQLResult<Data> = {
  data: Data
  errors?: Array<{
    message: string
    extensions: unknown
  }>
}

const graphql = async <Data, Variables = Record<string, unknown>>(
  options: GraphqlOptions<Variables>,
): Promise<GraphQLResult<Data> | Error> => {
  const { endpoint, headers, query, variables } = options

  const result = (await errorBoundary(async () =>
    ky
      .post(endpoint, {
        headers,
        body: JSON.stringify({ query, variables }),
      })
      .json(),
  )) as GraphQLResult<Data>

  if (result instanceof Error) {
    if (result instanceof HTTPError) {
      const response = (await result.response.json()) as Record<string, any>
      console.log(response)
    }

    return result
  }

  if (Array.isArray(result.errors) && result.errors[0]) {
    return new Error(result.errors[0].message)
  }

  return result
}

type GraphqlPaginateOptions<Data> = {
  endpoint: string
  query: string
  variables: Record<string, unknown>
  headers: Record<string, string>
  getTotal: (row: Data) => number
  merge: (a: Data, b: Data) => Data
  limit?: number
  offset?: number
}

const graphqlPaginate = async <Data>(
  options: GraphqlPaginateOptions<Data>,
): Promise<GraphQLResult<Data> | Error> => {
  const {
    endpoint,
    query,
    variables,
    headers,
    getTotal,
    merge,
    limit = 100,
    offset = 0,
  } = options

  const result = await graphql<Data>({
    endpoint,
    query,
    headers,
    variables: {
      ...variables,
      limit,
      offset,
    },
  })
  if (result instanceof Error) {
    return result
  }

  const count = limit + offset
  const total = getTotal(result.data)
  if (total > count) {
    const nextResults = await graphqlPaginate({
      ...options,
      offset: offset + limit,
    })
    if (nextResults instanceof Error) {
      return nextResults
    }

    return {
      ...result,
      data: merge(result.data, nextResults.data),
    }
  }

  return result
}

export { graphql, graphqlPaginate, GraphQLResult }

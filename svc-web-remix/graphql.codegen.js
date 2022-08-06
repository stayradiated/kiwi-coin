module.exports = {
  schema: [
    {
      'http://localhost:9999/v1/graphql': {
        headers: {
          'X-Hasura-Admin-Secret': 'unlockedinfinity',
          'X-Hasura-Allowed-Roles': 'guest,user,superuser',
        },
      },
    },
  ],
  documents: ['./app/graphql/**/*.graphql'],
  overwrite: true,
  generates: {
    './app/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        scalars: {
          'numeric': 'number',
          'smallint': 'number',
          'timestamp': 'string',
          'timestamptz': 'string',
          'uuid': 'string',
          'bpchar': 'string'
        }
      }
    },
    './app/graphql/schema.json': {
      plugins: ['introspection'],
    },
  },
}

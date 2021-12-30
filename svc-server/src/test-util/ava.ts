import anyTest, { TestInterface } from 'ava'

import { pool } from '../pool.js'
import type { Pool } from '../types.js'
import { createMakeInstance, MakeInstance } from './make.js'

type DefaultContext = {
  pool: Pool
  make: MakeInstance
}

const test = anyTest as TestInterface<DefaultContext>

test.beforeEach((t) => {
  t.context.pool = pool
  t.context.make = createMakeInstance()
})

export { test }
export type { DefaultContext }

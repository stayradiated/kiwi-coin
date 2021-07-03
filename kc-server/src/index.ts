import { readConfig } from '@stayradiated/kc-config'
import env from 'env-var'

import pool from './pg-pool.js'
import { fetchMarketPrice } from './components/market-price/index.js'

import type { ComponentProps } from './types.js'

const CONFIG_PATH = env.get('CONFIG_PATH').required().asString()

void (async function () {
  const config = await readConfig(CONFIG_PATH)

  const props: ComponentProps = {
    config,
    pool,
  }

  await fetchMarketPrice(props)
})()

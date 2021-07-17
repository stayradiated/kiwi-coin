import type { Config } from '@stayradiated/kc-config'
import type { Pool } from 'pg'

type ComponentProps = {
  config: Config
  pool: Pool
}

type Component = (props: ComponentProps) => Promise<void | Error>

export { Component, ComponentProps, Pool, Config }

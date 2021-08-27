import React from 'react'

import { EventResponse } from './EventResponse'

import styles from './EventDetails.module.css'

import type {Invocation } from '../_utils/types.invocation'

type EventDetailsProps = {
  event: Invocation | undefined,
}

const EventDetails = (props: EventDetailsProps) => {
  const { event } = props

  return (
    <div className={styles.container}>
      <h1>Event Details</h1>
      <code>Event ID: {event?.id}</code>
      {event && <EventResponse event={event} />}
    </div>
  )
}

export { EventDetails }

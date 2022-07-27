import { Form, Input, PrimaryButton, LinkButton } from '../retro-ui'

import type { GetUserDeviceByUidQuery } from '~/graphql/generated'

type Props = {
  userDeviceUID: string
  query: GetUserDeviceByUidQuery
}

const UserDeviceFormEdit = (props: Props) => {
  const { userDeviceUID, query } = props

  const name = query.kc_user_device_by_pk?.name

  return (
    <>
      <h2>Edit Device</h2>
      <Form
        name={`edit-device-${userDeviceUID}`}
        method="post"
        action={`/account/devices/${userDeviceUID}/edit`}
      >
        <Form.Item label="Name" name="name">
          <Input defaultValue={name} />
        </Form.Item>
        <Form.Item>
          <LinkButton href="/devices">Cancel</LinkButton>
          <PrimaryButton type="submit">Save</PrimaryButton>
        </Form.Item>
      </Form>
    </>
  )
}

export { UserDeviceFormEdit }
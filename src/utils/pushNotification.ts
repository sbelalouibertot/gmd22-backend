/* eslint-disable no-console */
import axios from 'axios'
import FormData from 'form-data'

type TPushNotification = {
  message: string
  title?: string
  group?: string
}

export const pushNotification = async ({
  message,
  title = 'GMD22',
  group = 'GMD22',
}: TPushNotification): Promise<boolean> => {
  try {
    const formData = new FormData()
    formData.append('accountKey', process.env.NOTIFICATION_ACCOUNT_KEY ?? '')
    formData.append('title', title)
    formData.append('message', message)
    formData.append('group', group)

    const { data } = await axios.post(`https://alertzy.app/send`, formData)
    return data?.response === 'success'
  } catch (err) {
    console.error(err)
  }
  return false
}

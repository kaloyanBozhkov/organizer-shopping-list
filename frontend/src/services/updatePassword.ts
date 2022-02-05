import { serviceFetcher } from 'services/common'

const updatePassword = (emailTokenId: string, newPassword: string) =>
    serviceFetcher('update-password', { emailTokenId, newPassword }, 'PUT')

export default updatePassword

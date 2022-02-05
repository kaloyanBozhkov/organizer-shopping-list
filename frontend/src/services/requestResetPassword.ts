import { serviceFetcher } from './common'

const requestResetPassword = (email: string) => serviceFetcher('request-password-reset', { email })

export default requestResetPassword

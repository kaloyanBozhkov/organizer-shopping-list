import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import DropDownPaperOutlet from 'templates/DropDownPaperOutlet/DropDownPaperOutlet'

import Logo from 'components/UI/Logo/Logo'
import PaperActionArrow from 'components/UI/PaperActionArrow/PaperActionArrow'

import { getDomainFromEmail } from 'helpers/utils.common'

import styles from './styles.module.scss'

const RegistrationSuccess = () => {
    const { registeredUser } = useContext(AccessAreaContext),
        domain = registeredUser ? getDomainFromEmail(registeredUser.email) : null

    return registeredUser ? (
        <DropDownPaperOutlet>
            <div className={styles.registrationSuccessWrapper}>
                <Logo className={styles.logo} />
                <p>
                    Hey <b>{registeredUser.alias}</b>, thank you for creating an acount!
                </p>
                <p>
                    We have sent an email with a confirmation link to <b>{registeredUser.email}</b>{' '}
                    since you have to confirm ownership of the email address before continuing :)
                </p>
                <PaperActionArrow domain={domain!} />
            </div>
        </DropDownPaperOutlet>
    ) : (
        <Navigate to=".." />
    )
}

export default RegistrationSuccess

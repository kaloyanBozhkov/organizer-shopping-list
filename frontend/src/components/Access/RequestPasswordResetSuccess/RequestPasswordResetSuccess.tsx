import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import DropDownPaperOutlet from 'templates/DropDownPaperOutlet/DropDownPaperOutlet'

import Logo from 'components/UI/Logo/Logo'
import PaperActionArrow from 'components/UI/PaperActionArrow/PaperActionArrow'

import { getDomainFromEmail } from 'helpers/utils.common'

import styles from './styles.module.scss'

const RequestPasswordResetSuccess = () => {
    const { resetEmail } = useContext(AccessAreaContext)

    return resetEmail ? (
        <DropDownPaperOutlet>
            <div className={styles.requestPasswordResetSuccessWrapper}>
                <Logo className={styles.logo} />
                <p>
                    An email containing a password-reset link has been sent to <b>{resetEmail}</b>{' '}
                    as long as that email is indeed associated with an actual account.
                </p>
            </div>
            <PaperActionArrow domain={getDomainFromEmail(resetEmail)} />
        </DropDownPaperOutlet>
    ) : (
        <Navigate to=".." />
    )
}

export default RequestPasswordResetSuccess

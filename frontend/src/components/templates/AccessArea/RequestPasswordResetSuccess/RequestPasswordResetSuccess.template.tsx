import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import Logo from 'components/atoms/Logo/Logo.atom'
import PaperActionArrow from 'components/atoms/PaperActionArrow/PaperActionArrow.atom'

import DropDownPaperOutletLayout from 'components/layouts/DropDownPaperOutlet/DropDownPaperOutlet.layout'

import { getDomainFromEmail } from 'helpers/utils.common'

import styles from './styles.module.scss'

const RequestPasswordResetSuccess = () => {
    const { resetEmail } = useContext(AccessAreaContext)

    return resetEmail ? (
        <DropDownPaperOutletLayout>
            <div className={styles.requestPasswordResetSuccessWrapper}>
                <Logo className={styles.logo} />
                <p>
                    An email containing a password-reset link has been sent to <b>{resetEmail}</b>{' '}
                    as long as that email is indeed associated with an existing non-Google account.
                </p>
            </div>
            <PaperActionArrow domain={getDomainFromEmail(resetEmail)} />
        </DropDownPaperOutletLayout>
    ) : (
        <Navigate to=".." />
    )
}

export default RequestPasswordResetSuccess

import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import Logo from 'components/atoms/Logo/Logo.atom'
import PaperActionArrow from 'components/atoms/PaperActionArrow/PaperActionArrow.atom'

import DropDownPaperOutletLayout from 'components/layouts/DropDownPaperOutlet/DropDownPaperOutlet.layout'

import styles from './styles.module.scss'

const PasswordResetSuccess = () => {
    const { updatedPassword } = useContext(AccessAreaContext)

    return updatedPassword ? (
        <DropDownPaperOutletLayout>
            <div className={styles.resetPasswordSuccess}>
                <Logo modifier="paperBG" className={styles.logo} />
                <p>
                    Your password was updated successfully! Now please write it down somewhere
                    before you forget it again :)
                </p>
                <PaperActionArrow domain={window.location.host} />
            </div>
        </DropDownPaperOutletLayout>
    ) : (
        <Navigate to=".." />
    )
}

export default PasswordResetSuccess

import React, { useContext } from 'react'

import { Navigate, useParams } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import usePromise from 'hooks/Data/usePromise/usePromise'
import useCountdown from 'hooks/useCountdown'

import Logo from 'components/atoms/Logo/Logo.atom'

import { Paper } from '@material-ui/core'

import verifyJWT, { VerficiationResponseJWT } from 'services/verifyJWT'

import { retryPromisePromisified } from 'helpers/utils.common'

import styles from './styles.module.scss'

const ConfirmedEmail = () => {
    const { jwt } = useParams(),
        { onSaveConfirmedJWT } = useContext(AccessAreaContext),
        { loading, response } = usePromise<VerficiationResponseJWT, string>(() =>
            retryPromisePromisified(() => verifyJWT(jwt as string))
        ),
        count = useCountdown({
            onReady: () => onSaveConfirmedJWT(jwt!),
            gate: !!response?.verified,
        }),
        msg = response?.verified ? (
            <>
                <p>Thank you for confirming your email address!</p>
                <p>
                    You will be logged in automatically in <b>{count}</b>..
                </p>
            </>
        ) : (
            <Navigate to="/" />
        )

    return (
        <Paper variant="outlined" className={styles.confirmedEmailWrapper}>
            <Logo className={styles.logo} />
            {loading ? <p>Confirming validity of provided token...</p> : msg}
        </Paper>
    )
}

export default ConfirmedEmail

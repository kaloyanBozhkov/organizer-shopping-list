import React, { useCallback } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

import usePromise from 'hooks/Data/usePromise/usePromise'
import useCountdown from 'hooks/useCountdown'

import Logo from 'components/UI/Logo/Logo'

import { Paper } from '@material-ui/core'

import verifyJWT, { VerficiationResponseJWT } from 'services/verifyJWT'

import { saveJWT } from 'helpers/token'
import { retryPromisePromisified } from 'helpers/utils.common'

import styles from './styles.module.scss'

const ConfirmedEmail = () => {
    const { jwt } = useParams(),
        { loading, response } = usePromise<VerficiationResponseJWT, string>(() =>
            retryPromisePromisified(() => verifyJWT(jwt as string))
        ),
        navigator = useNavigate(),
        saveConfirmedJWTAndRedirect = useCallback(() => {
            saveJWT(jwt!)
            navigator('/')
        }, [jwt, navigator]),
        count = useCountdown({ onReady: saveConfirmedJWTAndRedirect, gate: !!response?.verified }),
        msg = response?.verified ? (
            <>
                <p>Thank you for confirming your email address!</p>
                <p>
                    You will be logged in autocamically in <b>{count}</b>..
                </p>
            </>
        ) : (
            <Navigate to="/" />
        )

    return (
        <Paper variant="outlined" className={styles.confirmedEmailWrapper}>
            <Logo />
            {loading ? <p>Confirming validity of provided token...</p> : msg}
        </Paper>
    )
}

export default ConfirmedEmail

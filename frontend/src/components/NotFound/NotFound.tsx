import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button, Paper } from '@material-ui/core'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'

import styles from './styles.module.scss'

const NotFound = ({ message }: { message?: string }) => {
    const loc = useLocation(),
        nav = useNavigate()

    return (
        <Paper variant="outlined" className={styles.notFoundWrapper}>
            <SentimentDissatisfiedIcon />
            {message ? (
                <h1>message</h1>
            ) : (
                <h1>
                    Oops! Nothing was found under <b>{loc.pathname}</b> :(
                </h1>
            )}
            <Button variant="contained" color="primary" onClick={() => nav('/')}>
                Go Back
            </Button>
        </Paper>
    )
}

export default NotFound

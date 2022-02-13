import React, { ReactNode } from 'react'

import { Button, Paper } from '@material-ui/core'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'

import styles from './styles.module.scss'

type IssueProps = { children: ReactNode; message?: never } | { message: string; children?: never }

const Issue = ({ children, message }: IssueProps) => {
    return (
        <Paper variant="outlined" className={styles.issueWrapper}>
            <SentimentDissatisfiedIcon />
            <div>
                {children}
                {message && <h1>{message}</h1>}
            </div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    window.location.href = window.location.origin
                }}
            >
                Go Back
            </Button>
        </Paper>
    )
}

export default Issue

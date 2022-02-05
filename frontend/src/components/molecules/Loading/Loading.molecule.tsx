import React from 'react'

import { Box, CircularProgress } from '@material-ui/core'

import styles from './styles.module.scss'

export type LoadingProps = {
    message?: string
    modifier?: 'main' | 'generic'
}

const Loading = ({ message = 'Loading..', modifier = 'generic' }: LoadingProps) => {
    return (
        <Box className={styles.loading} data-modifier={modifier}>
            <CircularProgress className={styles.spinner} />
            {message && <p>{message}</p>}
        </Box>
    )
}

export default Loading

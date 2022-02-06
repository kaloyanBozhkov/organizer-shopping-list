import React from 'react'

import Loading from 'components/molecules/Loading/Loading.molecule'

import { Paper } from '@material-ui/core'

import styles from './styles.module.scss'

const LoadingTemplate = ({ message }: { message?: string }) => (
    <Paper variant="outlined" className={styles.loadingWrapper}>
        <Loading modifier="generic" message={message} />
    </Paper>
)

export default LoadingTemplate

import React from 'react'

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'

import styles from './styles.module.scss'

const PaperActionArrow = ({ domain }: { domain: string }) => (
    <a className={styles.link} href={`http://www.${domain}`}>
        <div>
            <KeyboardArrowUpOutlinedIcon />
            <KeyboardArrowUpOutlinedIcon />
        </div>
        <p>
            go to <br />
            <b>{domain}</b>
        </p>
    </a>
)

export default PaperActionArrow

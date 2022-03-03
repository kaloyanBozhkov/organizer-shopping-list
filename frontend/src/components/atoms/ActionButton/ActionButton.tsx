import React from 'react'

import { Button } from '@material-ui/core'
import type { SvgIconComponent } from '@mui/icons-material'

import styles from './styles.module.scss'

export type ActionButtonProps = {
    icon?: SvgIconComponent
    label?: string
    className?: string
    onClick: () => void
}

const ActionButton = ({ icon: IconComponent, label, onClick, className }: ActionButtonProps) => (
    <Button
        variant="contained"
        color="primary"
        className={
            className ? [styles.actionButton, className].join(' ').trim() : styles.actionButton
        }
        onClick={onClick}
    >
        <div>
            {IconComponent && <IconComponent />}
            {label && <p>{label}</p>}
        </div>
    </Button>
)

export default ActionButton

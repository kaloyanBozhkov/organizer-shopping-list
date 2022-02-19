import React from 'react'

import AddRoundedIcon from '@mui/icons-material/AddRounded'

import styles from './styles.module.scss'

const AddBtn = ({ onClick, hoverLabel }: { onClick: () => void; hoverLabel?: string }) => (
    <button className={styles.addBtn} onClick={onClick}>
        <AddRoundedIcon />
        {hoverLabel && <p>{hoverLabel}</p>}
    </button>
)

export default AddBtn

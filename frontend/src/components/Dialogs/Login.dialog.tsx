import React, { useContext, useState } from 'react'

import ActionsContext from 'context/Actions.context'

import { Button, Dialog } from '@mui/material'

const LoginDialog = () => {
    const [open, setOpen] = useState(true),
        { onToggleLoginProcess } = useContext(ActionsContext)

    return (
        <Dialog open={open}>
            <Button
                onClick={() => {
                    onToggleLoginProcess()
                    setOpen(true)
                }}
            >
                CLOSE
            </Button>
        </Dialog>
    )
}

export default LoginDialog

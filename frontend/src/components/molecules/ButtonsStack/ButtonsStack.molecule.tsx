import React from 'react'

import { Button } from '@material-ui/core'
import type { SvgIconComponent } from '@mui/icons-material'

import styles from './styles.module.scss'

export type StackButtonProps = {
    label: string
    isActive: boolean
    icon: SvgIconComponent
    onClick: () => void
}

type ButtonsStackProps = {
    btnsDef?: StackButtonProps[]
    alignment?: 'centered' | 'left'
    withAnimation?: boolean
}

const ButtonsStack = ({
    btnsDef,
    alignment = 'centered',
    withAnimation = false,
}: ButtonsStackProps) => (
    <>
        {!btnsDef || !btnsDef.length
            ? null
            : btnsDef.map(({ label, icon: IconComponent, isActive, onClick }) => (
                  <Button
                      key={label}
                      data-with-animation={withAnimation}
                      data-alignment={alignment}
                      className={styles.categoryButton}
                      variant="text"
                      color="primary"
                      onClick={onClick}
                      data-is-active={isActive}
                      startIcon={<IconComponent />}
                  >
                      {label}
                  </Button>
              ))}
    </>
)

export default ButtonsStack

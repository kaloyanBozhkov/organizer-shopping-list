import React, { ReactNode } from 'react'

import useIsMounted from 'hooks/animations/useIsMounted'

import { Button } from '@material-ui/core'
import type { SvgIconComponent } from '@mui/icons-material'

import styles from './styles.module.scss'

type CategoryButtonProps = {
    label: string
    isActive: boolean
    icon: SvgIconComponent
    onClick: () => void
}

type CategoryButtonsProps = {
    definition: Record<
        string,
        {
            // at start, next to header title
            headerBtn?: ReactNode
            // list of btns
            btns: CategoryButtonProps[]
            // at end of list of btns
            afterBtn?: ReactNode
        } & (
            | {
                  isDynamic?: false
                  noButtonsYetMsg?: never
              }
            | {
                  isDynamic: true
                  noButtonsYetMsg: string
              }
        )
    >
    alignment?: 'centered' | 'left'
    withAnimation?: boolean
}

const CategoryButtons = ({
    definition,
    alignment = 'centered',
    withAnimation = false,
}: CategoryButtonsProps) => {
    const { isMounted } = useIsMounted()

    return (
        <>
            {Object.keys(definition).map((categoryName) => {
                const { btns, isDynamic, noButtonsYetMsg, headerBtn, afterBtn } =
                    definition[categoryName as keyof typeof definition]

                return (
                    <div
                        data-id="categoryButtonsWrapper"
                        key={categoryName}
                        className={styles.category}
                        data-alignment={alignment}
                        data-with-animation={withAnimation}
                        data-already-mounted={isMounted}
                    >
                        <div className={styles.heading}>
                            <p>{categoryName}</p>
                            {headerBtn}
                        </div>
                        {isDynamic && !btns.length ? (
                            <p className={styles.nothingHereYet}>{noButtonsYetMsg}</p>
                        ) : (
                            btns.map(({ label, icon: IconComponent, isActive, onClick }) => (
                                <Button
                                    key={label}
                                    variant="text"
                                    color="primary"
                                    onClick={onClick}
                                    data-is-active={isActive}
                                    startIcon={<IconComponent />}
                                >
                                    {label}
                                </Button>
                            ))
                        )}
                        {afterBtn && <div className={styles.afterBtnWrapper}>{afterBtn}</div>}
                    </div>
                )
            })}
        </>
    )
}

export default CategoryButtons

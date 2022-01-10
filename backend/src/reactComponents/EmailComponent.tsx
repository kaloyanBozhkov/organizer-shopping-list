import React, { ReactNode } from 'react'

import { colors, fontFamily } from './common.styles'

export const styles = {
    wrapper: {
        ...fontFamily,
        width: '100%',
        height: '100%',
        backgroundColor: colors.purple,
        border: ` 1px solid ${colors.border}`,
        maxWidth: '700px',
    },
    shoppingList: {
        width: '100%',
        color: colors.text,
        padding: '35px',
        textAlign: 'center',
        boxSizing: 'border-box',
        margin: '0',
        paddingBottom: '10px',
    },
}
const EmailComponent = ({
    children,
    extraWrapperStyles,
}: {
    children: ReactNode
    extraWrapperStyles?: Record<string, string>
}) => (
    <div style={{ ...styles.wrapper, ...(extraWrapperStyles || {}) }}>
        <h1 style={styles.shoppingList}>- ShoppingList -</h1>
        {children}
    </div>
)

export default EmailComponent

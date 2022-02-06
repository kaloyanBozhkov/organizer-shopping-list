import React from 'react'

import EmailComponent from './EmailComponent'
import { colors } from './common.styles'

const styles = {
    text: {
        color: colors.text,
        padding: '20px',
        fontSize: '18px',
        margin: '0',
        lineHeight: '25px',
    },
    green: { color: colors.green },
    link: {
        color: colors.green,
        fontSize: '20px',
    },
    link2: {
        fontSize: '14px',
        width: '100%',
        textAlign: 'center',
    },
    warning: {
        color: colors.text,
        padding: '0 20px',
        fontSize: '20px',
    },
    time: {
        color: colors.green,
        fontSize: '25px',
        padding: '0 6px',
    },
    info: {
        color: colors.text,
        fontSize: '10px',
        width: '100%',
        textAlign: 'center',
        padding: '20px',
    },
} as Record<string, React.CSSProperties>

type ConfirmEmailProps = {
    alias: string
    redirectUrl: string
    minutesActive: string | number
}

const ConfirmEmail = ({ alias, redirectUrl, minutesActive }: ConfirmEmailProps) => (
    <EmailComponent>
        <p style={styles.text}>
            Hey <b style={styles.green}>{alias}</b>,
            <br />
            <br />
            Thank you for creating an account with us, and welcome to <b>ShoppingList</b>!
            <br /> <br />
            All you have to do now is <b style={styles.green}>confirm your email</b> address by{' '}
            <b>
                {' '}
                <a style={styles.link} href={redirectUrl}>
                    clicking here
                </a>{' '}
            </b>
            or opening the below link:
            <br />
            <a style={{ ...styles.link, ...styles.link2 }} href={redirectUrl}>
                {redirectUrl}
            </a>
        </p>
        <p style={styles.warning}>
            You have <b style={styles.time}>{minutesActive} minutes</b> before the link expires. If
            the link expires before you have had the chance to click it, you will have to register
            again.
        </p>
        <p style={styles.info}>
            <i>(Please ignore this email if you did not expect to receive it)</i>
        </p>
    </EmailComponent>
)

export default ConfirmEmail

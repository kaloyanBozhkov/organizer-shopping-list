import React from 'react'

import EmailComponent from './EmailComponent'
import { btnDefault, colors } from './common.styles'

const styles = {
        wrapper: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.darkPurple,
            color: colors.text,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            padding: '0 40px',
            fontSize: '30px',
            lineHeight: '40px',
        },
        contain: {
            height: '40vh',
            minHeight: '400px',
        },
        hrefBtn: {
            ...btnDefault,
            textDecoration: 'none',
            margin: '30px auto',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: '1',
        },
        emailWrapper: {
            display: 'flex',
            flexDirection: 'column',
        },
    } as Record<string, React.CSSProperties>,
    OverTopErrorMsgPage = ({ msg }: { msg: string }) => (
        <div style={styles.wrapper}>
            <div style={styles.contain}>
                <EmailComponent extraWrapperStyles={styles.emailWrapper}>
                    <div style={styles.content}>
                        <p style={styles.text}>{msg}</p>
                        <a style={{ ...styles.hrefBtn }} href={process.env.FRONTEND_URL}>
                            Go Back
                        </a>
                    </div>
                </EmailComponent>
            </div>
        </div>
    )

export default OverTopErrorMsgPage

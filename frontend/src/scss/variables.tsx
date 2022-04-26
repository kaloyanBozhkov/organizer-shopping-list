import React, { useMemo } from 'react'

import { useReactiveVar } from '@apollo/client'

import { Helmet } from 'react-helmet'

import { themeVar } from 'reactives/Styles.reactive'

// up to
export const BREAKPOINTS = {
    mobile: '599px',
}

// Gets the theme vars and appends them to the document head so all scss modules have access to the css vars
export const GlobalStyles = () => {
    const theme = useReactiveVar(themeVar),
        rootVars = useMemo(
            () =>
                Object.keys(theme).reduce(
                    (acc, key) => `${acc}\n--${key}: ${theme[key as keyof typeof theme]};`,
                    ''
                ),
            [theme]
        )

    return (
        <Helmet>
            <style>{`:root {${rootVars}\n}`}</style>
        </Helmet>
    )
}

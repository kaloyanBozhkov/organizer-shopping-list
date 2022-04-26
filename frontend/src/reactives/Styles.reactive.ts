import { makeVar } from '@apollo/client'

// default styles
const COLORS = {
        green: '#05e6c4',
        purple: '#2d0b59',
        white: '$fffcf9',
        black: '#000',
        red: '#ef476f',
        text: '#cdc5df',
        textPrimary: '#9f82d7',
        paperBg: '#341662',
        paperBorder: '#4c249f',
        highlightPurple: '#282967',
        sweetGradient: 'linear-gradient(40deg, #4c249f, #1c3857 50%, #650380)',
        // $blue: #26547c;
        // $light: #84a9c0;
        // $yellow: #fc0;
    },
    COLORS_MODIFIED = {
        textDarken20Percent: '#9483bb',
        textTransparentize55Percent: 'rgba(205, 197, 223, 0.45)',
        greenDarken10Percent: '#04b499',
        purpleDarken5Percent: '#220842',
    }

export const themeVar = makeVar<typeof COLORS & typeof COLORS_MODIFIED>({
    ...COLORS,
    ...COLORS_MODIFIED,
})

export const setTheme = (
    newColors: Record<keyof typeof COLORS & keyof typeof COLORS_MODIFIED, string>
) =>
    themeVar({
        ...COLORS,
        ...COLORS_MODIFIED,
        ...newColors,
    })

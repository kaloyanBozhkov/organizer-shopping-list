const {
        override,
        addWebpackModuleRule,
        removeModuleScopePlugin,
        babelInclude,
        addWebpackPlugin,
    } = require('customize-cra'),
    path = require('path')

module.exports = override(
    addWebpackModuleRule({
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
            'css-modules-typescript-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ],
        // offer alias for root dir - baseUrl of typescript config is ./src/ already but gitlab gets confused when mixins use it
        resolve: {
            alias: {
                '~': './src/',
            },
        },
    }),
    addWebpackModuleRule({
        test: /\.(png|jpe?g|gif)$/i,
        use: {
            loader: 'url-loader',
            options: {
                publicPath: '../..',
            },
        },
    }),
    addWebpackModuleRule({
        test: /\.svg$/,
        use: [
            {
                // allow importing as component
                loader: '@svgr/webpack',
            },
            {
                // allow importing as url for src
                loader: 'svg-url-loader',
                options: {
                    // make loader to behave like url-loader, for all svg files
                    encoding: 'base64',
                    publicPath: '../..',
                },
            },
        ],
    }),
    // circumvent limitation to import from only within the src folder
    removeModuleScopePlugin(),
    // tell babel to transpile sutff within our src folder but also ourside it, and where
    babelInclude([path.resolve('src'), path.resolve('../backend/src')])
)

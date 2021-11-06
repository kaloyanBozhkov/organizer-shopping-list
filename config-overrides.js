const { override, addWebpackModuleRule } = require('customize-cra')

module.exports = override(
    // embedIndexStartFile,
    addWebpackModuleRule({
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            'style-loader',
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
        use: {
            loader: 'svg-url-loader',
            options: {
                // make loader to behave like url-loader, for all svg files
                encoding: 'base64',
                publicPath: '../..',
            },
        },
    })
)

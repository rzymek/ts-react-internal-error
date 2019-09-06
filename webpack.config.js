const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const webpackConfig = {
    mode: "production",
    context: __dirname, // to automatically find tsconfig.json
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true
                }
            }
        ]
    },
    plugins: [new ForkTsCheckerWebpackPlugin()]
};
module.exports = webpackConfig;

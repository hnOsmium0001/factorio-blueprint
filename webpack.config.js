module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './factorio-blueprint.min.js',
        library: 'Blueprint',
        libraryTarget: 'umd',
        globalObject: 'this',
        libraryExport: 'default'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    }
}

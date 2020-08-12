const path = require('path');//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
    chainWebpack: (config) => {
        config
            .resolve
                .alias
                    .set('@', resolve('./src'))
                    .end()
                .end()
            .module
                .rule('pug')
                .test(/\.pug$/)
                .use('pug-plain-loader')
                    .loader('pug-plain-loader')
    },
    // devServer:{
    //     proxy:{
    //         '/api/*': {
    //             target: 'https://randomuser.me/',
    //             changeOrigin: true,
    //             secure: false,
    //         },
    //     },
    // },
}

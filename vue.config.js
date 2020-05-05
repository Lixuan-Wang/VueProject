module.exports = {
    devServer: {
        disableHostCheck: false,
        open: true,
        host: "localhost",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: { //配置跨域
            '/api': { //基础路径
                target: 'https://localhost:8080', //本地地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
};

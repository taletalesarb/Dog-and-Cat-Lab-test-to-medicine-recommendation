// vue.config.js
module.exports = {
    pluginOptions: {
        proxy: {
            enabled: true,
            context: '/api',
            options: {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true
            }
        }
    }
}
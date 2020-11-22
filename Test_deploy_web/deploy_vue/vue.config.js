// vue.config.js
module.exports = {
    pluginOptions: {
        proxy: {
            enabled: true,
            context: '/api',
            options: {
                target: 'http://pinprayoon.ddns.net:5000',
                changeOrigin: true
            }
        }
    }
}
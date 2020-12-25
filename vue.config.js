module.exports={
    //配置环境变量 可以在dist里面打开index。html
    publicPath:process.env.NOED_ENV==="production"?"./":"/",
            //node服务器配置 设置代理 
         devServer:{
            proxy:{
                '/api': {
                    target: `http://127.0.0.1:3000/api/`,
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            },
            // headers: {
            //     'Access-Control-Allow-Origin': '*',
            // } 
    },    
    
    }
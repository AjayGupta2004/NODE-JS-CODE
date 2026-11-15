import dotenv from 'dotenv'

dotenv.config()

const config = {
    appName : process.env.APPNAME,
    port : process.env.PORT,
    environment : process.env.ENVIRONMENT
}

export default config
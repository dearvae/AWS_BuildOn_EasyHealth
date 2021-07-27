import Axios from 'axios'

export const AxiosTool = (token = null) => {
    const headersConfig = {
        'Content-Type': 'application/json'
        // 'Content-type': 'text/html',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }

    if (token)
        headersConfig['authorization'] = `Bearer ${token}`

    return Axios.create({
        baseURL: process.env.REACT_APP_API,
        headers: headersConfig
    })
}

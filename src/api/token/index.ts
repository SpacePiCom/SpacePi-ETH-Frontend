import request from '@/request'
export interface tokenAPIs {
  tokenInfoAPI: (tokenAddress: string, key: string) => Promise<any>
}

const env: any = process

const token: tokenAPIs = {
  tokenInfoAPI: (tokenAddress: string, key: string) => {
    return request.get(
      env['NODE_ENV'] === 'development' ?
        `/getTokenInfo/${tokenAddress}?apiKey=${key}`
      : env['API_URL']
      
    )
  }
}
export default token

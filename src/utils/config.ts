let baseUrl: string
if (process.env.NODE_ENV === 'development' || process.env.API_ENV === 'test') {
  baseUrl = 'http://127.0.0.1:7777'
} else if (process.env.API_ENV === 'pre') {
  baseUrl = '222'
} else if (process.env.API_ENV === 'prod') {
  baseUrl = '222'
}
export { baseUrl }

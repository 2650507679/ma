import axioss from 'axios'
var axios=axioss.create({
    baseURL:"http://localhost:9527/api",
    timeout:10000
})
export default axios
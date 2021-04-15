let base64 = require('js-base64').Base64

var jiami=function(b){
   return  base64.encode(b)
}
var jiemi=function(b){
   return  base64.decode(b)
}
export default {jiami,jiemi}
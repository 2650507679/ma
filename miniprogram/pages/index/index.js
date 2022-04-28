//index.js
const app = getApp()
import axios from '../../plugins/axios'
Page({
data: {
api:{
wineList:'https://aip.baidubce.com/rest/2.0/image-classify/v1/redwine',
moneyList:'https://aip.baidubce.com/rest/2.0/image-classify/v1/currency'
},
wineList: [],
moneyList:[],
result:{wineList:{},moneyList:{}},
type:''
},

//选择图片后
afterRead(e) {
console.log(e);
this.setData({type:e.target.dataset.type})
console.log(this.data.type);
if(this.data.type==='wineList'){
  const { file } = e.detail;
  const { wineList = [] } = this.data;
  wineList.push({ url:file.url, name:'图片' });
  this.setData({ wineList });
}else if(this.data.type==='moneyList'){
  const { file } = e.detail;
  const { moneyList = [] } = this.data;
  moneyList.push({ url:file.url, name:'图片' });
  this.setData({ moneyList });
}
},

//删除图片
delete(e){
this.setData({type:e.target.dataset.type})
if(this.data.type==='wineList'){
  const { wineList = [] } = this.data;
  wineList.splice(e.detail.index,1)
  this.setData({ wineList });
}else if(this.data.type==='moneyList'){
  const { moneyList = [] } = this.data;
  moneyList.splice(e.detail.index,1)
  this.setData({ moneyList });
}
this.data.result[this.data.type] = {}
this.setData({
  result:this.data.result
})
},

//识别
yes(e){
this.setData({type:e.target.dataset.type})
if(this.data[this.data.type].length){
//图片转base64格式
const file = wx.getFileSystemManager()
const baseUrl = file.readFileSync(this.data[this.data.type][0].url, "base64")
axios({
url: `${this.data.api[this.data.type]}?access_token=${app.globalData.image_search_token}`,
method: 'POST',
data: {
  image: baseUrl
},
header: {
  'Content-Type': 'application/x-www-form-urlencoded',
}
}).then(res => {
if(res.data.result.hasdetail===1){
  this.data.result[this.data.type]=res.data.result
  this.setData({
    result:this.data.result
  })
}else if(res.data.result.hasdetail===0){
  wx.showToast({
    title: '搜不到!',
    icon: 'error'
  })
}
})
}else{
wx.showToast({
  title: '请选择图片!',
  icon: 'error'
})
}
},

//获取access_token
getToken(){
axios({
  url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=6rSt9V6XvYotgXvoxtoNjEMd&client_secret=BojZGeXKUtixveaU1HpvDZPzoZt7StNh',
  method: 'POST',
}).then(res => {
  app.globalData.image_search_token = res.data.access_token
})
},

onLoad: function() {
  this.getToken()
}
})

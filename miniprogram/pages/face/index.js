// pages/page1/page1.js
const app = getApp()
import axios from '../../plugins/axios'
Page({
data: {
faceListAdd:[],
faceListSearch:[],
type:''
},

//选择图片后
afterRead(e) {
this.setData({type:e.target.dataset.type})
if(this.data.type==='faceListAdd'){
  const { file } = e.detail;
  const { faceListAdd = [] } = this.data;
  faceListAdd.push({ url:file.url, name:'图片' });
  this.setData({ faceListAdd });
}else if(this.data.type==='faceListSearch'){
  const { file } = e.detail;
  const { faceListSearch = [] } = this.data;
  faceListSearch.push({ url:file.url, name:'图片' });
  this.setData({ faceListSearch });
} 
},

//删除图片
delete(e){
this.setData({type:e.target.dataset.type})
if(this.data.type==='faceListAdd'){
  const { faceListAdd = [] } = this.data;
  faceListAdd.splice(e.detail.index,1)
  this.setData({ faceListAdd });
}else if(this.data.type==='faceListSearch'){
  const { faceListSearch = [] } = this.data;
  faceListSearch.splice(e.detail.index,1)
  this.setData({ faceListSearch });
}
},

//新增人脸
addFace(){
if(this.data.faceListAdd.length){
//图片转base64格式
const file = wx.getFileSystemManager()
const baseUrl = file.readFileSync(this.data.faceListAdd[0].url, "base64")
axios({
  url: `https://aip.baidubce.com/rest/2.0/face/v3/faceset/user/add?access_token=${app.globalData.face_List_token}`,
  method: 'POST',
  data:{
    image: baseUrl,
    user_id: "mamengyu",
    image_type: "BASE64",
    group_id: "facelist"
  },
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
}).then(res => {
if(res.data.error_msg==="SUCCESS"){
wx.showToast({
  title: '新增成功!',
  icon: 'success'
})
}else if(res.data.error_msg==="face already exist"){
wx.showToast({
  title: '重复添加!',
  icon: 'error'
})
}else if(res.data.error_msg==="pic not has face"){
wx.showToast({
  title: '图上没脸!',
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

//人脸识别
SearchFace(){
if(this.data.faceListSearch.length){
//图片转base64格式
const file = wx.getFileSystemManager()
const baseUrl = file.readFileSync(this.data.faceListSearch[0].url, "base64")
axios({
  url: `https://aip.baidubce.com/rest/2.0/face/v3/search?access_token=${app.globalData.face_List_token}`,
  method: 'POST',
  data:{
    image: baseUrl,
    user_id: "mamengyu",
    image_type: "BASE64",
    group_id_list: "facelist"
  },
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
}).then(res => {
if(res.data.error_msg==="SUCCESS"){
wx.showToast({
  title: '识别成功!',
  icon: 'success'
})
}else if(res.data.error_msg==="match user is not found"){
wx.showToast({
  title: '没有该脸!',
  icon: 'error'
})
}else if(res.data.error_msg==="pic not has face"){
wx.showToast({
  title: '图上没脸!',
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
  url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=3NluY77Dwa4ycQQrB7R4yO1c&client_secret=VfbaMqGiWo9WDLhpowUaw9iPwcGSC4iH',
  method: 'POST',
}).then(res => {
  app.globalData.face_List_token = res.data.access_token
})
},

//生命周期函数--监听页面加载
onLoad: function (options) {
this.getToken()
},

//用户点击右上角分享
onShareAppMessage: function () {

}
})
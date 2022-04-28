module.exports=(obj,titles,showflag,hideflag)=>{
  return new Promise((resolve,reject)=>{
    if(showflag){
      wx.showLoading({
        title: titles,
        mask:true,
      })
    }
    wx.request({
      ...obj,
      success(res){
        resolve(res)
        wx.hideLoading( {
          fail(){}
        })
      },
      fail(err){
        reject(err)
        if(hideflag){
          wx.hideLoading(
            {
            fail(){}
          }
          )
        }
      }
    })
  })
}
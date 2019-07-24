/**
 * 
 * @authors : w2getty 
 * @email   : monster@ahjzu.edu.cn
 * @date    : 2019-07-24 15:29:15
 * @github  : https://github.com/w2getty
 */

wx.getSystemInfo({
  success : (res) =>{
    this.setData({
      realWidth : Math.ceil(res.windowWidth/2*res.screenWidth/375),
      realHeight : Math.ceil(res.windowHeight/2*res.screenWidth/375)
    })
  }
})

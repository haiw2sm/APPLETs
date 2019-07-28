// pages/player/player.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFullScreen : false
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('firstVideo')
    // var videoContext = wx.createVideoContext(videoid, this)
    // 这种实例对象再每个函数下都需要重新定义
  },
  
  bindPlay (){
    this.videoContext.play()
  },
  bindPause(){
    this.videoContext.pause()
  },
  bindFullScreen(){
    this.videoContext.requestFullScreen()
  }
})
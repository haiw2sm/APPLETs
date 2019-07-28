// pages/movies/movies.js
let dat = require('../../data/data.js');  //只能用相对路径
console.log(dat,typeof dat);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieArry : [],
    carousel : '/images/moviePosters/poster',
    wid : 0,
    hg : 0
  },

  // 跳转到播放器  
  toDetail : function(events){
    console.log(events);
    let index = events.currentTarget.dataset.index;
    wx.navigateTo({
      "url" : "/pages/detail/detail?index="+index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      movieArry : dat.data
    });
    wx.getSystemInfo({
      success : (res) =>{
        this.setData({
          wid : Math.ceil(res.windowWidth/2*res.screenWidth/375),
          hg : Math.ceil(res.windowHeight/2*res.screenWidth/375)

        })
      } 
    })
  },

  carousel2detail: function(events){
    console.log(events);
    let index = events.target.dataset.index;
    wx.navigateTo({
      'url':"/pages/detail/detail?index="+ index
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
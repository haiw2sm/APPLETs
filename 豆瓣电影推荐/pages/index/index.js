// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nickName : '',
    avatarUrl : null,
    isShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("监听页面加载")
    this.getUserInfo()
  },
  getUserInfo : function(){
    // 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限(拒绝授权or接受授权)。
    wx.getSetting({
      success: (data) => {
        console.log(data)
        if (data.authSetting['scope.userInfo']) {
          this.setData({
            isShow : false
          })
        } else {
          this.setData({
            isShow : true
          })
        }
      },
      fail() {
        console.log("获取信息失败")
      }
    }),
      // 获取用户信息。★ 调用前需要 用户授权 
      wx.getUserInfo({
        success: (res) => {
          console.log(res)
          // 无需再判断直接获取
          this.setData({
            avatarUrl: res.userInfo.avatarUrl,
            nickName: res.userInfo.nickName
        })
        },
        fail:()=> {
          console.log("授权失败")
        }
      })
  },
  handleUserInfo : function(data){
    console.log("用户点击了",data)
    //判断用户点击的是否是允许 以决定是否刷新页面
    if (data.detail.rawData){
      this.getUserInfo()
    }
    },

    // 跳转页面
    handleClick:function(){
      wx.navigateTo({
        url: "/pages/movies/movies"
      })
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("监听页面初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("监听页面显示")
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
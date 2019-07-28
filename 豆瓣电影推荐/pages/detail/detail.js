// pages/detail/detail.js
let dat = require('../../data/data.js');  //只能用相对路径
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wid: 0,
    hg : 0,
    index: null,
    detailObj : {},
    isCollect:false,
    isShare: false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let index = options.index;
    wx.getSystemInfo({
      success : (res) =>{
        this.setData({
          wid : Math.ceil(res.windowWidth/2*res.screenWidth/375),
          hg : Math.ceil(res.windowHeight/2*res.screenWidth/375)
        })
      }
    });

      this.setData({
        index : index,
        detailObj: dat.data[index]
      });

      // 同步： 没有回调
      // 异步： 有回调
      let detailStorage = wx.getStorageSync('isCollected')
      console.log(detailStorage)
      // 情况1:只需要判定当前【下标页】是否被收藏【i】
      if(detailStorage[index]){ // 收藏过
        this.setData({
          isCollect : true
        })
      };
      // 情况2:第一次初始化，detailStorage为空 【预处理】
      if(!detailStorage){
        wx.setStorageSync('isCollected', {})
      }
    },

  collectionBtn:function(){
    let isCollected = ! this.data.isCollect
    // 更新状态
    this.setData({
      isCollect : isCollected
    });
    // 用户提示
    let title = isCollected?"收藏成功":"已取消收藏";
    wx.showToast({
      title: title
    });

    let {index} = this.data;
    // 异步 obj需要传入来自getStorage回调函数中的返回值
    // 获取上次数据到本地【1】
    wx.getStorage({
      key: 'isCollected',
      success: (res)=> {
          let obj = res.data;     // 衔接点
          obj[index] = isCollected;
          // 缓存当前数据到本地 【2】
          wx.setStorage({
            key: 'isCollected',
            data: obj,
            success: () => {
              console.log('收藏成功')
          },
        })
      }
    })
  },
  // 绑定事件
  shareBtn:function(){
    let isShare = !this.data.isShare;
    this.setData({
      isShare : isShare
    });
    let title = isShare ? "分享成功" : "已取消分享";
    wx.showToast({
      title: title
    });

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
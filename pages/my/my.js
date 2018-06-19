// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: "",//用户头像  
      nickName: "",//用户昵称  
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**  
   * 获取用户信息  
   */
  let that = this;
    wx.getUserInfo({
      success: function (res) {
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
    });
  },
  joined: function() {
    wx.navigateTo({
      url: '/pages/runningPage/runningPage',
    })
  },

  pushed: function() {
    wx.navigateTo({
      url: '/pages/pushed/pushed',
    })
  }
})
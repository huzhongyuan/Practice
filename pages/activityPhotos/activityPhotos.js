// pages/activityPhotos/activityPhotos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photoLists: [{
      headPortrait: '/images/图层 2.png',
      name: '杨杨',
      time: '2018-06-07 14:30',
      photos: ['/images/图层 3.png', '/images/图层 6.png'],
      click: '2'
    }, {
      headPortrait: '/images/图层 2.png',
      name: '杨杨',
      time: '2018-06-07 14:30',
      photos: ['/images/图层 3.png', '/images/图层 6.png'],
      click: '2'
    }]
  },

  //点赞
  thumbsUp: function() {
    // let ref = this;
    // wx.request({
    //   method: 'get',
    //   data: {},
    //   url: '',
    //   success: function( data) {
    //     ref.setData({

    //     })
    //   },
    //   fail: function( data ) {

    //   }
    // })
  },

  upload:function() {
    wx.chooseImage({
      count: 9, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        var tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: 'https://...',      //此处换上你的接口地址  
          filePath: tempFilePaths[0],
          name: 'img',
          header: {
            "Content-Type": "multipart/form-data",
            'accept': 'application/json',
            'Authorization': 'Bearer ..'    //若有token，此处换上你的token，没有的话省略  
          },
          formData: {
            'user': 'test'  //其他额外的formdata，可不写  
          },
          success: function (res) {
            var data = res.data;
            console.log('data');
          },
          fail: function (res) {
            console.log('fail');
          },
        })
      }
    }) 
  }
})
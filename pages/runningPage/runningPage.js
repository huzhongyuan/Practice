// pages/runningPage/runningPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    running_items: [{
      items_title: '奇趣小手艺 浓浓亲子情',
      items_time: {
        img: '/images/time.png',
        time: '2018.10.01—2018.10.05',
      },
      items_addr: {
        img: '/images/addr.png',
        addr: '石桥铺正街99号红槽房'
      },
      member: '24人已报名',
    }],
    activityPhoto: {
      photoList: ['/images/图层 6.png', '/images/图层 3.png'],
      author: '虎虎',
    }
  },

 //上传活动照片
 upload: function () {
   wx.navigateTo({
     url: '/pages/activityPhotos/activityPhotos',
   })
 }
})
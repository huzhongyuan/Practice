//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    message_content:'你报名参加的“携手合众 你我共赢”已经开始啦',
    running_items: [{
      items_title: '奇趣小手艺 浓浓亲子情',
      items_time: {
        img: '/images/time.png',
        time: '2018.10.01—2018.10.05',
      },
      items_addr: {
        img: '/images/addr.png',
        addr: '石桥铺正街99号红槽房'
      }
    }],
    show_items: [{
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
    }, {
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
    pagingColor: ['#f78445', '#333333', '#333333', '#333333'],
  },

  onLoad: function () {
  },

  //进行中的项目
  runningPage: function() {
    wx.navigateTo({
      url: '/pages/runningPage/runningPage',
    })
  },

  //活动详情
  toDetail: function() {
    wx.navigateTo({
      url: '/pages/activitiesInfo/activitiesInfo',
    })
  }
})

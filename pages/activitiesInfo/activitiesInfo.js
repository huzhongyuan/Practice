// pages/activitiesInfo/activitiesInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activitiesInfo: {
      title: '奇趣小手艺 浓浓亲子情',
      poster: '/images/活动详情.png',
      label: '免费',
      timeIco: '/images/时间-1.png',
      time: '2018.10.01--2018.10.05  14:00--15:00',
      addrIco: '/images/矢量智能对象.png',
      addr: '石桥铺正街99号红槽房',
      promptTitle: '本活动要求参与者身体健康，参与活动前充分准备，没有不适合参加剧 烈活动的疾病，例如但不限于下列疾病：',
      promptList: ['（1）先天性心脏病和风湿性心脏病患者；', '（2）高血压和脑血管疾病患者；', '（3）心肌炎和其他心脏病患者；','如遇台风、雷雨天气，活动将取消'],
      headPortrait: '/images/7.png',
      author: '妮妮',
      name: '周周周',
      photo: '13123548568',
      signUp: [{
        ico: '/images/人群.png',
        info: '24/28'
      }, {
          ico: '/images/个人 (11).png',
        info: '24/28'
        }, {
          ico: '/images/矢量智能对象1.png',
          info: '24/28'
      }], 
      photoList: [{
        photo: '/images/图层 3.png',
        name: '杨杨',
      }, {
        photo: '/images/图层 3.png',
        name: '王大贵',
        }, {
          photo: '/images/图层 3.png',
          name: '王大贵',
        },],
      joined: [
        {
          photo:'/images/图层 2.png',
          name: '蜡笔小新',
        }, {
          photo: '/images/图层 111.png',
          name: '蜡笔小新',
        }
      ],
    }
  },

 //上传事件
 upload: function() {
   wx.chooseImage({
     count: 1, // 默认9  
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
 },


 //查看更多参与人
 moreMember: function() {
   wx.navigateTo({
     url: '/pages/moreMenber/moreMenber',
   })
 },

 //分享
 share: function() {
   let that = this;

   //1. 请求后端API生成小程序码
  //  that.getQr();

   //2. canvas绘制文字和图片
   const ctx = wx.createCanvasContext('myCanvas');
   var imgPath = that.data.activitiesInfo.poster;
   var bgImgPath = that.data.activitiesInfo.poster;
   ctx.drawImage(imgPath, 0, 0, 600, 520);

   ctx.setFillStyle('white')
   ctx.fillRect(0, 520, 600, 280);

   ctx.drawImage(imgPath, 30, 550, 60, 60);
   ctx.drawImage(bgImgPath, 30, 550, 60, 60);
   ctx.drawImage(imgPath, 410, 610, 160, 160);

   ctx.setFontSize(28)
   ctx.setFillStyle('#6F6F6F')
   ctx.fillText('妖妖灵', 110, 590)

   ctx.setFontSize(30)
   ctx.setFillStyle('#111111')
   ctx.fillText('宠友们快来围观萌宠靓照', 30, 660)
   ctx.fillText('我在萌爪幼稚园', 30, 700)

   ctx.setFontSize(24)
   ctx.fillText('长按扫码查看详情', 30, 770)
   ctx.draw()
  
   // 3. canvas画布转成图片
   wx.canvasToTempFilePath({
     x: 0,
     y: 0,
     width: 600,
     height: 800,
     destWidth: 600,
     destHeight: 800,
     canvasId: 'myCanvas',
     success: function (res) {
       console.log(res.tempFilePath);
       that.setData({
         shareImgSrc: res.tempFilePath
       })

     },
     fail: function (res) {
       console.log(res)
     }
   })

   //4. 当用户点击分享到朋友圈时，将图片保存到相册
   wx.saveImageToPhotosAlbum({
     filePath: that.data.activitiesInfo.poster,
     success(res) {
       wx.showModal({
         title: '存图成功',
         content: '图片成功保存到相册了，去发圈噻~',
         showCancel: false,
         confirmText: '好哒',
         confirmColor: '#72B9C3',
         success: function (res) {
           if (res.confirm) {
             console.log('用户点击确定');
           }
         }
       })
     }
   })
 },

 //立即报名
 join: function() {
   wx.navigateTo({
     url: '/pages/join/join',
   })
 }
})
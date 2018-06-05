// pages/wxml/index.js
Page({
  data: {
    
    navbar: [
      '热门', 
      '代购',
      '二手买卖',
      '失物招领',
      '活动'
      ],
    hot: [{Wechat_Number_Put:"",
      Order_Type: 0,
      Order_Time: "",
      Order_Title: "",
      Order_Content:""
      }, 
      ],
      goods:[
        {
          id:"5",
          hottype:"代购",
          time:"2017-7-1",
          title:"代买鲜芋仙",
          location:"滨江道"},
        {
          id:"6",
          hottype: "代购",
          time: "2017-7-2",
          title: "代买鲜芋仙",
          location: "滨江道"
        },
        {
          id:"7",
          hottype: "代购",
          time: "2017-7-3",
          title: "代买鲜芋仙",
          location: "滨江道"
        },
        {
          id:"8",
          hottype: "代购",
          time: "2017-7-4",
          title: "代买鲜芋仙",
          location: "滨江道"
        },
        {
          id:"9",
          hottype: "代购",
          time: "2017-7-5",
          title: "代买鲜芋仙",
          location: "滨江道"
        }
      ],
      sale: [
        {
          id:"10",
          hottype: "二手买卖",
          time: "2017-7-1",
          title: "睫毛膏",
          location: "南开-津南"
        },
        {
          id:"11",
          hottype: "二手买卖",
          time: "2017-7-2",
          title: "睫毛膏",
          location: "南开-津南"
        },
        {
          id:"12",
          hottype: "二手买卖",
          time: "2017-7-3",
          title: "睫毛膏",
          location: "南开-津南"
        },
        {
          id:"13",
          hottype: "二手买卖",
          time: "2017-7-4",
          title: "睫毛膏",
          location: "南开-津南"
        },
        {
          id:"14",
          hottype: "二手买卖",
          time: "2017-7-5",
          title: "睫毛膏",
          location: "南开-津南"
        }
      ],
      lostandfound: [
        {
          id:"15",
          hottype: "失物招领",
          time: "2017-7-1",
          title: "一卡通",
          location: "南开-津南"
        },
        {
          id:"16",
          hottype: "失物招领",
          time: "2017-7-1",
          title: "一卡通",
          location: "南开-津南"
        },
        {
          id:"17",
          hottype: "失物招领",
          time: "2017-7-1",
          title: "一卡通",
          location: "南开-津南"
        },
        {
          id:"18",
          hottype: "失物招领",
          time: "2017-7-1",
          title: "一卡通",
          location: "南开-津南"
        },
        {
          id:"19",
          hottype: "失物招领",
          time: "2017-7-1",
          title: "一卡通",
          location: "南开-津南"
        }
      ],
      activity: [
        {
          id:"20",
          hottype: "活动",
          time: "2017-7-1",
          title: "组局狼人杀",
          location: "南开-津南"
        },
        {
          id:"21",
          hottype: "活动",
          time: "2017-7-2",
          title: "组局狼人杀",
          location: "南开-津南"
        },
        {
          id:"22",
          hottype: "活动",
          time: "2017-7-3",
          title: "组局狼人杀",
          location: "南开-津南"
        },
        {
          id:"23",
          hottype: "活动",
          time: "2017-7-4",
          title: "组局狼人杀",
          location: "南开-津南"
        },
        {
          id:"24",
          hottype: "活动",
          time: "2017-7-5",
          title: "组局狼人杀",
          location: "南开-津南"
        }
      ],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  navigate:function(event){
    var listid =event.currentTarget.dataset.listId;
    console.log(listid);
    wx.navigateTo({
      url: '/pages/hot/hotdetail/hotdetail?id='+listid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://192.168.43.113:3000/searchAll',//此处填写你后台请求地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        
        console.log(res.data);//在控制台输出在远程后台请求到的数据
        
        
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
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
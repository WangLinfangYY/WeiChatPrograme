// pages/Dev/meetingActivities/meetingActivities_post/meetingActivities_post.js

var delegate;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'',
    title:'',
    place:'',
    link:''
  },

  input_time: function (e) { 
    this.data.time = e.detail.value;
  },
  input_title: function (e) { 
    this.data.title = e.detail.value;
  },
  input_place: function (e) { 
    this.data.place = e.detail.value;
  },
  input_link: function (e) { 
    this.data.link = e.detail.value;
  },

  complete:function(){
    if (!this.data.time || !this.data.title || !this.data.place || !this.data.link){
      wx.showModal({
        title: '',
        content: '请将内容填写完整',
      })
      return;
    }
    delegate.data.arr_dataSource = [{
      name: "品途N号",
      title: this.data.title,
      time: this.data.time,
      place: this.data.place,
    }].concat(delegate.data.arr_dataSource);
    delegate.setData({
      arr_dataSource: delegate.data.arr_dataSource,
    });
    wx.navigateBack({
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages();
    delegate = pages[pages.length - 2];
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
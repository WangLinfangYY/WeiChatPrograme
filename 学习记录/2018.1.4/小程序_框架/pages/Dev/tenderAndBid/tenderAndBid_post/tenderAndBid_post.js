// pages/Dev/tenderAndBid/tenderAndBid_post/tenderAndBid_post.js

var delegate;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deadline:'',
    title:'',
    content:'',
  },
  input_deadline:function(e){
    this.setData({
      deadline:e.detail.value,
    })
  },
  input_title:function(e){
    this.setData({
      title: e.detail.value,
    })
  },
  input_content:function(e){
    this.setData({
      content: e.detail.value,
    })
  },
  complete:function(){
    if(!this.data.title||!this.data.deadline||!this.data.content){
      wx.showModal({
        title: '',
        content: '请填写完整地内容',
      })
      return;
    }
    var item = {
      name: '果小8',
      content: this.data.content,
      deadline: this.data.deadline,
      isOutOfDate: false,
    };
    delegate.data.arr_dataSource = [{
      name: '果小8',
      content: this.data.content,
      deadline: this.data.deadline,
      isOutOfDate: false,
    }].concat(delegate.data.arr_dataSource)
    delegate.setData({
      arr_dataSource: delegate.data.arr_dataSource,
    })
    wx.redirectTo({
      url: '../tenderAndBid_detail/tenderAndBid_detail?item=' + JSON.stringify(item),
    })();
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
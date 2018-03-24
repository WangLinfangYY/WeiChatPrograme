

var util = require('../../common/util.js')
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc_outOfData:'../image/mark_outOfDate.png',
    arr_dataSource:[]
  },

  /**
   * 搜索
   */
  search:function(e){
    console.log(e.detail.value);
    util.community_queryTenderBbsListByTitle(1, e.detail.value,function(res){
      if (res.data.success) {
        that.setData({
          arr_dataSource: res.data.value.data,
        });
      }
    });
  },
  showDetail:function(e){
    wx.navigateTo({
      url: '../tenderAndBid_detail/tenderAndBid_detail?item='+JSON.stringify(e.currentTarget.dataset.item),
    })
    console.log(e)
  },
  post:function(){
    wx.navigateTo({
      url: '../tenderAndBid_post/tenderAndBid_post',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    wx.showLoading({
      title: '正在加载数据',
    });
    util.community_queryTenderBbsList(1,function(res){
      console.log(res);
      wx.hideLoading();
      if (res.data.success){
        that.setData({
          arr_dataSource:res.data.value.data,
        });
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
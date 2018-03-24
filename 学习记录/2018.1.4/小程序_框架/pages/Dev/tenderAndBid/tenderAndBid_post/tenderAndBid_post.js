// pages/Dev/tenderAndBid/tenderAndBid_post/tenderAndBid_post.js
var userId = getApp().globalData.userInfo.userId;

var that;
var delegate;
var _datePicker;

var util = require('../../common/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deadline:'',
    title:'',
    content:'',
    isShowDatePicker:false,
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
  showSeleDatePicker:function(){
    this.setData({
      isShowDatePicker: !this.data.isShowDatePicker,
    });
    _datePicker = this.selectComponent("#datePicker");
  },
  /**
   * 取消
   */
  _cancel:function(){
    this.showSeleDatePicker()
  },
  /**
   * 完成选择
   */
  _confirm:function(){
    this.setData({
      deadline: _datePicker.data.year + '-' + _datePicker.data.month + '-' + _datePicker.data.day + ' ' + _datePicker.data.h + ':' + _datePicker.data.m + ':' + _datePicker.data.s
    });
    this.showSeleDatePicker()
  },
  /**
   * 提交
   */
  complete:function(){
    if(!this.data.title||!this.data.deadline||!this.data.content){
      wx.showModal({
        title: '',
        content: '请填写完整地内容',
      })
      return;
    }
    wx.showLoading({
      title:'数据正在提交',
    });
    util.community_postTenderBbs(that.data.deadline, that.data.title, that.data.content, userId,function(res){
      wx.hideLoading();
    })
    /*
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
    */
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages();
    delegate = pages[pages.length - 2];
    that = this;
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
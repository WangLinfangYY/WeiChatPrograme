// pages/Dev/meetingActivities/meetingActivities_post/meetingActivities_post.js

var delegate;
var datePicker;
var util = require('../../common/util.js');
var that;
var userId = getApp().globalData.userInfo.userId;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowDatePicker:false,
    isSelectTimeForStart:true,
    time_start:'',
    time_end:'',
    title:'',
    place:'',
    link:''
  },

  input_time_start: function (e) { 
    this.setData({
      isShowDatePicker: true,
      isSelectTimeForStart:true
    });
    datePicker = this.selectComponent("#datePicker");
  },
  input_time_end:function(){
    this.setData({
      isShowDatePicker: true,
      isSelectTimeForStart: false
    });
    datePicker = this.selectComponent("#datePicker");
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
/**
 * 取消
 */
  _cancel:function(){
    this.setData({
      isShowDatePicker: false,
    });
  },
/**
 * 确定
 */
  _confirm:function(){
    if (this.data.isSelectTimeForStart){
      this.setData({
        time_start: datePicker.data.year + '-' + datePicker.data.month + '-' + datePicker.data.day + ' ' + datePicker.data.h + ':' + datePicker.data.m + ':' + datePicker.data.s,
        isShowDatePicker:false,
      })
    }else{
      this.setData({
        time_end: datePicker.data.year + '-' + datePicker.data.month + '-' + datePicker.data.day + ' ' + datePicker.data.h + ':' + datePicker.data.m + ':' + datePicker.data.s,
        isShowDatePicker: false,
      })
    }
    this.setData({
      isShowDatePicker: false,
    });
  },
  complete:function(){
    if (!this.data.time_start || !this.data.time_end || !this.data.title || !this.data.place || !this.data.link){
      wx.showModal({
        title: '',
        content: '请将内容填写完整',
      })
      return;
    }
    /*
    delegate.data.arr_dataSource = [{
      name: "品途N号",
      title: this.data.title,
      time_start: this.data.time_start,
      time_end: this.data.time_end,
      place: this.data.place,
    }].concat(delegate.data.arr_dataSource);
    delegate.setData({
      arr_dataSource: delegate.data.arr_dataSource,
    });
    */
    util.community_postActivityBbs(that.data.time_start +'至'+ that.data.time_end, that.data.title, that.data.place, that.data.link,userId,function(res){
      console.log(res);
      if (res.data.success){
        wx.showModal({
          title: '',
          content: '发布成功',
        })
      wx.navigateBack({
      });
      }
    });
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages();
    that = this;
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
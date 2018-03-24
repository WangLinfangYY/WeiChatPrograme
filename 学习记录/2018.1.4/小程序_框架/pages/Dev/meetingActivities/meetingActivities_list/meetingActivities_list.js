// pages/Dev/meetingActivities/meetingActivities_list/meetingActivities_list.js

var util = require('../../common/util.js');
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr_dataSource:[
      {
        name:"品途1号",
        title:"第三届新零售大会",
        time_start:'2017-12-31',
        time_end:'2018-1-4',
        place:'广东省广州市'
      },
      {
        name: "品途2号",
        title: "广州企业家年会-暨庆祝广州上市公司数量破万大会",
        time_start: '2017-12-31',
        time_end: '2018-1-4',
        place: '广东省广州市'
      }
    ]
  },
/**
 * 搜索
 */
  search:function(e){
    util.community_queryActivityBbsListByTitle(1, e.detail.value,function(res){
      if (res.data.success){
        that.setData({
          arr_dataSource: res.data.value.data,
        });
      }
    })
  },
  post:function(){
    wx.navigateTo({
      url: '../meetingActivities_post/meetingActivities_post',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    wx.showLoading({
      title: '正在加载数据',
    })
    util.community_queryActivityBbsList(1,function(res){
      wx.hideLoading();
      console.log(res);
      if(res.data.success){
        that.setData({
          arr_dataSource:res.data.value.data,
        });
      }
    });
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
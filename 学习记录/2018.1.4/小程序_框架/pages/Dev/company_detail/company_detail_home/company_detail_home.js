// pages/Dev/company_detail/company_detail_home/company_detail_home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      name: '果小7',
      content: '办公室常温零食供应商招标',
      deadline: '12月20日',
      isOutOfDate: false,
    },
    select:{
      isOverView:true,
      isNews:false,
      isCommunity:false,
      btnColor_overView:"#679CFF",
      btnColor_news:"#141711",
      btnColor_community:"#141711",
    },
  },
  btnClick_overview:function(){
    this.setData({
      select: {
        isOverView: true,
        isNews: false,
        isCommunity: false,
        btnColor_overView: "#679CFF",
        btnColor_news: "#141711",
        btnColor_community: "#141711",
      }
    });
  },
  btnClick_news:function(){
    this.setData({
      select: {
        isOverView: false,
        isNews: true,
        isCommunity: false,
        btnColor_overView: "#141711",
        btnColor_news: "#679CFF",
        btnColor_community: "#141711",
      }
    });
  },
  btnClick_community:function(){
    this.setData({
      select: {
        isOverView: false,
        isNews: false,
        isCommunity: true,
        btnColor_overView: "#141711",
        btnColor_news: "#141711",
        btnColor_community: "#679CFF",
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
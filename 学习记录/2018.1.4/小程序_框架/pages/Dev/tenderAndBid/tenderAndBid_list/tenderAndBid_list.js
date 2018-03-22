Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc_outOfData:'../image/mark_outOfDate.png',
    arr_dataSource:[
      {
        name: '果小7',
        content: '办公室常温零食供应商招标',
        deadline: '12月20日',
        isOutOfDate:false,
      },
      {
        name: '猩便利',
        content: '办公室食品派送招标',
        deadline: '12月20日',
        isOutOfDate: false,
      },
      {
        name: '盒马鲜生',
        content: '北京地区面包蟹生鲜供应商',
        deadline: '1月20日',
        isOutOfDate: true
      }
    ]
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
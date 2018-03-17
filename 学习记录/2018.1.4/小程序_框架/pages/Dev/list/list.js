Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr_list: [
      {
        pre_id:'comment',
        id:'comment_list',
        title:'评论列表'
      },
      {
        pre_id:'tenderAndBid',
        id:'tenderAndBid_list',
        title:'招标投标列表'
      },
      {
        pre_id:'meetingActivities',
        id:'meetingActivities_list',
        title:'会议活动列表'
      },
      {
        pre_id: 'company_detail',
        id: 'company_detail_home',
        title: '公司详情'
      }
    ]
  },
  showListDetail: function (e) {
    console.log(e)
    let item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '../' + item.pre_id +'/'+ item.id + '/' + item.id,
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
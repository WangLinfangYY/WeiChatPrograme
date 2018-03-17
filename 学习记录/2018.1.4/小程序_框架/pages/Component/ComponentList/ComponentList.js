Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr_componentNames:[
      "view","scroll-view","movable-view","cover-view","icon","text","rich-text","progress","button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea","navigator","audio","image","icon","video","camera","live-player","live-pusher","map","canvas","open-data","web-view","contact-button"
    ]
  },
  showListDetail:function(e){
    console.log(e)
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../'+id+'/'+id,
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
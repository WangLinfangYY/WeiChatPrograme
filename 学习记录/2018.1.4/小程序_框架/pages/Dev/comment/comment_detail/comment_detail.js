
var delegate;
var index;
var _addCommentTool;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  
  _sendComment:function(){
    var tmp_data_comment = this.data.source
    tmp_data_comment.itemCommenList = tmp_data_comment.itemCommenList.concat([{ user: '游客666', comment: _addCommentTool.data.input_content }])
    this.setData({
      source: tmp_data_comment,
    })
    delegate.data.arr_dataSource.splice(index, 1, tmp_data_comment)
    delegate.setData({
      arr_dataSource: delegate.data.arr_dataSource
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var source = JSON.parse(options.source)

    var pages = getCurrentPages()
    delegate = pages[pages.length - 2];
    // delegate = JSON.parse(options.delegate)
    index = JSON.parse(options.index)
    this.setData({
      source: source
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    _addCommentTool = this.selectComponent("#addComment");
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
    
  },
})
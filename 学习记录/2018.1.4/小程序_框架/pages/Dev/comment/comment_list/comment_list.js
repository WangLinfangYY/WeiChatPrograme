
var _addCommentTool;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr_dataSource:[
      {
        name:'果小7',
        content:'对于口味挑剔的白领们来说，虽然无人货架让购物更便捷，但如果没有新鲜口味的商品选择，很难产生持久消费。另外，无人货架体积有限，点位分散，若想及时补货、定期更新品类、提供更多健康食品，就需要更高的人力和物力成本。',
        time:'12分钟前',
        itemCommenList: [
        ]
      },
      {
        name: '果小7',
        content: '对于口味挑剔的白领们来说，虽然无人货架让购物更便捷，但如果没有新鲜口味的商品选择，很难产生持久消费。另外，无人货架体积有限，点位分散，若想及时补货、定期更新品类、提供更多健康食品，就需要更高的人力和物力成本。',
        time: '12分钟前',
        itemCommenList: [
          { user: '品途1号', comment: '说的很有道理说的的很有道理说的的很有道理说的的很有道理说的的很有道理说的的很有道理说的的很有道理说的的很有道理' },
          { user: '品途2号', comment: '说的的很有道理+1' }
        ]
      },
      {
        name: '果小7',
        content: '对于口味挑剔的白领们来说，虽然无人货架让购物更便捷，但如果没有新鲜口味的商品选择，很难产生持久消费。另外，无人货架体积有限，点位分散，若想及时补货、定期更新品类、提供更多健康食品，就需要更高的人力和物力成本。',
        time: '12分钟前',
        itemCommenList: [
          { user: '品途1号', comment: '说的很有道理' },
          { user: '品途2号', comment: '说的的很有道理+1' }
        ]
      }
    ]
  },
  
  /**
   * comment_item----显示评论详情
   */
  _showCommentDetail:function(e){
    console.log(e);
    wx.navigateTo({
      url: '../comment_detail/comment_detail?source=' + JSON.stringify(e.currentTarget.dataset.detailsource) +
       '&delegate=' + JSON.stringify(this) + 
       '&index=' + JSON.stringify(e.currentTarget.dataset.index),
    })
  },
  
  /**
   * addComment----发送评论
  */
  _sendComment:function(){
    var newDataSource = [{
      name: '果小8',
      content: _addCommentTool.data.input_content,
      time: '刚刚',
      itemCommenList: []
    }].concat(this.data.arr_dataSource)
    this.setData({
      arr_dataSource: newDataSource,
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
    _addCommentTool = this.selectComponent("#addComment")
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
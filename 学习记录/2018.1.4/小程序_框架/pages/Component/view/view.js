



var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKeyword:'',
    searchSongList:[],
    isFromSearch:true,
    searchPageNum:1,
    callbackcount:15,
    mark_loadMore:false,
    mark_noMore:false,
    isRequested:false,
    isLoadAllCompplete:false,
  },
  bindKeywordInput:function(e){
    console.log("输入框事件")
    console.log(e)
    this.setData({
      searchKeyword:e.detail.value
    })
  },
  // 搜索，访问网络
  fetchSearchList:function(){
    let that = this
    let searchKeyword = that.data.searchKeyword
    let searchPageNum = that.data.searchPageNum
    let callbackcount = that.data.callbackcount//返回数据的个数
    //访问网络
    wx.showLoading({
      title: '加载中……',
    })
    util.getSearchMusic(searchKeyword,searchPageNum,callbackcount,function(data){
      console.log(data)
      wx.hideLoading()
      if(data.data.song.curnum !=0){
        let searchList = []
        that.data.isFromSearch ? searchList=data.data.song.list : searchList=that.data.searchSongList.concat(data.data.song.list)
        if(data.data.song.curnum <callbackcount)
        {
          that.setData({
            searchSongList: searchList,
            zhida: data.data.zhida,//存放歌手属性的对象
            mark_loadMore: false,//把“上拉加载”的变量设为false,隐藏
            mark_noMore: true,//把“没有数据”设为true，显示
          })
        }else{
          that.setData({
            searchSongList: searchList,
            zhida: data.data.zhida,//存放歌手属性的对象
            mark_loadMore:true,//把“上拉加载”的变量设为true,显示
            mark_noMore: false,//把“没有数据”设为false，隐藏
          })
        }
      }else{
        that.setData({
          mark_noMore:true,//把“没有数据”设为true，显示
          mark_loadMore:false,//把“上拉加载”的变量设为false，隐藏
        })
      }
    })

  },
  keywordSearch:function(e){
    this.setData({
      searchPageNum:1,
      searchSongList:[],
      isFromSearch:true,
    })
    this.fetchSearchList();
  },

  // 滚动到底部触发事件
  searchScrollLower:function(e){
    // console.log(e);
    // let that = this;
    // if(that.data.searchLoading && !that.data.searchLoadingComplete){
    //   that.setData({
    //     searchPageNum:that.data.searchPageNum +1,
    //     isFromSearch:false
    //   });
    //   that.fetchSearchList();
    // }
  },

  scroll:function(e){
    console.log(e)
  },
  /**
   * 
   */
  showSongDetail:function(){
    wx.navigateTo({
      url: '../song_detail/song_detail',
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
    let that = this;
    if (that.data.mark_loadMore && !that.data.mark_noMore) {
      that.setData({
        searchPageNum: that.data.searchPageNum + 1,
        isFromSearch: false
      });
      that.fetchSearchList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
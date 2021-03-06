

var common = require('../../common/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'init data',
    num:0,
    array:[{text:'init data'}],
    object:{
      text:'init data'
    },
    array2:[1,2,3,4,5,6,7,8,9],
    view:'haha',
    staffA:{
      firstName:'Hulk',lastName:'Hu'
    },
    staffB: {
      firstName: 'Shang', lastName: 'You'
    },
    staffC: {
      firstName: 'Gideon', lastName: 'Lin'
    },
    objectArray:[
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray:[1,2,3,4]
  },
  switch:function(e){
    const length = this.data.objectArray.length
    for(let i =0;i < length;i++)
    {
      const x = Math.floor(Math.random() *length)
      const y = Math.floor(Math.random() *length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray:this.data.objectArray
    })
  },
  addToFront:function(){
    const length = this.data.objectArray.length
    this.data.objectArray = [{id:length,uique:'unique_'+ length}].concat(this.data.objectArray)
    this.setData({
      objectArray:this.data.objectArray
    })
  },
  addNumberToFront:function(e){
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray:this.data.numberArray
    })
  },
  changeText:function(){
    this.setData({
      text:'change data'
    })
    common.sayHello(' kuGou')
  },
  changeNum:function(){
    this.data.num += 1
    this.setData({
      num:this.data.num
    })
  },
  changeItemInArray:function(){
    this.setData({
      'array[0].text':'change data'
    });
  },
  changeItemInObject:function(){
    this.setData({
      'object.text':'change data'
    });
  },
  addNewField:function(){
    this.setData({
      'newField.text':'new data'
    });
  },
  viewTap: function () {
    console.log('view tap');
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
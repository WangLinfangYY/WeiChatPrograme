// pages/Dev/component/addComment/addComment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //标题
    title:{
      type:String,
      value:'评论'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShowInput:false,
    input_focus:false,
    input_content:'',
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    showInput: function () {
      this.setData({
        isShowInput: true,
        input_focus:true,
      })
    },
    hideInput: function () {
      this.setData({
        isShowInput: false,
        input_focus:false,
      })
    },
    bind_input_content:function(e){
      this.setData({
        input_content: e.detail.value,
      })
    },
    _sendComment: function () {
      if (!this.data.input_content){
        wx.showModal({
          title: '',
          content: '评论不能为空',
        });
        return;
      }
      this.triggerEvent("sendComment");
      this.setData({
        input_content: '',
      });
      this.hideInput();
    },
  }
})

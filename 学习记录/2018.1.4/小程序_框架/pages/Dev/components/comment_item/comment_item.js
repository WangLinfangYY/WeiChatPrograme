// pages/Dev/components/comment_item/comment_item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{
        name:{type:String,value:''},
        content:{type:String,value:''},
        time:{type:String,value:''},
        itemCommenList:{type:Array,value:[]}
      }
    },
    hideLine:{
      type:Boolean,
      value:false,
    },
    hideReplyBtn:{
      type:Boolean,
      value:false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _showCommentDetail:function(e){
      this.triggerEvent("showCommentDetail");
    },
  }
})

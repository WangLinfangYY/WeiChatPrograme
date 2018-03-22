// pages/Dev/components/datePicker/datePicker.js


const date = new Date()
const years = []
var months = []
var days = []
var currentYear = date.getFullYear()
var currentMonth = date.getMonth()+1
var currentDay = date.getDate()

for (let i = 0; i <= 20; i++) {
  years.push(i + date.getFullYear())
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isHide:{
      type:Boolean,
      value:false,
    },
    message:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: currentMonth,
    days: days,
    day: currentDay,
    year: date.getFullYear(),
    value: [0, currentMonth-1, currentDay-1],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindChange: function (e) {
      const val = e.detail.value
      this.setData({
        year: this.data.years[val[0]],
        month: this.data.months[val[1]],
        day: this.data.days[val[2]]
      })
    },
    /**
     * 取消
     */
    _cancel:function(){
      this.triggerEvent("cancel")
    },
    /**
     * 完成选择
     */
    _confirm:function(){
      this.triggerEvent("confirm")
    }
  }
})

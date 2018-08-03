/*
全局方法
 */
// 引入弹出文字说明框的具体数据
import knowDatas from '../data/alertKnow'

var methods = {

  alertKnow: function (val) { // 弹窗文字说明框
    for (var i = 0; i < knowDatas.length; i++) {
      if (knowDatas[i].name == val) {
        this.knowTit = knowDatas[i].title
        this.knowCon = knowDatas[i].content
        this.knowShow = true
      }
    }
  }

}
export default methods

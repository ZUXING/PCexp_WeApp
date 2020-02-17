//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'hello, world'
  },
  getUserInfo: function (e) {
    //e为接收值，也就是用户信息
    //但是只有userInfo是昵称和头像等
    var userInfo = e.detail.userInfo
    /*将所有的用户登录信息直接赋值给App的globalData，
      注意，直接赋值的缺点是
      1.此变量必须存在，不能追加
      2.使用双大括号绑定的数据，不会动态更新
      3.必须按照层级关系找到变量，不能跨层级
        比如，this.data.xxx
      4.可能会有其他风险（据说）
    */
    /*另外，在iPhone上，将userInfo存入globalData后
      貌似退出再进入小程序、清理微信后台，甚至重启手机
      仍然保持登陆状态
      不知道是有特殊函数还是有别的
    */
    app.globalData.userInfo = userInfo
    /*相比之下，使用setData()函数可以避免上面的问题，
      缺点是比较麻烦，但是不用考虑层级
      修改参数的名字直接写出即可
      当执行了这个函数，对应的变量名会自动出现在data内
    */
    this.setData({
      userInfo: userInfo
    })
  },
  //从globalData重新获取userInfo
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  }
})

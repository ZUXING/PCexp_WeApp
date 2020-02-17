//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        /* 发送 res.code 到后台换取 openId, sessionKey, unionId
          因为微信小程序不允许把api.weixin.qq.com作为服务器域名
          所以需要你的后台服务器来间接获取openId等内容
          openId可以保证你的用户唯一，保持登录状态
          unionId则用来保证你所有的小程序都是统一用户
          更具体的解释在这个网页
            https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html
        */
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
    /*微信默认Demo的全局变量，用来存储用户信息方便全页面使用
      在子页面使用时，需要在文件开始处添加一行
        const app = getApp()
      然后，就可以使用全局变量了
        app.globalData.userInfo = XXX
    */
  }
})
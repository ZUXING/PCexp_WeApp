// pages/forum/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a_id = options.a_id;
    console.log("正在请求第" + a_id + "号文章")
    var thisPage = this
    wx.request({
      url: 'http://localhost:1997/pcexp_wx_forum_article_view.php?a_id='+a_id,
      header: {'Content-Type': 'application/json'},
      success(res) {
        console.log(res.data)
        res.data.a_content = decodeURI(res.data.a_content)
        thisPage.setData({
          pcexp_forum_article: res.data
        })
        wx.setNavigationBarTitle({
          title: res.data.a_title
        })
      }
    })
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
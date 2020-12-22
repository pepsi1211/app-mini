//app.js
App({
    onLaunch: function () {
      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      } else {
        wx.cloud.init({
          // env 参数说明：
          //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
          //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
          //   如不填则使用默认环境（第一个创建的环境）
          env: 'cloud-dev-4g52gmy58cf0eb8e',
          traceUser: true,
        })
      }

      // 获取小程序头部胶囊按钮的边界高度
      let headerBtnPosition = wx.getMenuButtonBoundingClientRect();
      let systeminfo = wx.getSystemInfoSync();
      let statusBarHeight = systeminfo.statusBarHeight // 状态栏高度
      let btnPosi = { // 胶囊实际位置，坐标信息不是左上角原点
        height: headerBtnPosition.height,
        width: headerBtnPosition.width,
        top: headerBtnPosition.top - statusBarHeight, // 胶囊top - 状态栏高度
        bottom: headerBtnPosition.bottom - headerBtnPosition.height - statusBarHeight, // 胶囊bottom - 胶囊height - 状态栏height （胶囊实际bottom 为距离导航栏底部的长度）
        right: systeminfo.windowWidth - headerBtnPosition.right // 这里不能获取 屏幕宽度，PC端打开小程序会有BUG，要获取窗口高度 - 胶囊right
      }
      let cusnavH = btnPosi.height + btnPosi.top + btnPosi.bottom; // 导航高度

      this.globalData = {
        statusBarHeight,
        navbarHeight: headerBtnPosition.bottom + btnPosi.bottom,
        navbarBtn: btnPosi,
        cusnavH
      }
    }
  })

  // app.js
  /**
   * 全局分享配置，页面无需开启分享
   * 如页面开启分享开关，则走页面分享配置（即使未配置内容）
   */
  ! function () {
    //获取页面配置并进行页面分享配置
    var PageTmp = Page
    Page = function (pageConfig) {
      let view = Page
      //全局开启分享
      pageConfig = Object.assign({
        onShareAppMessage: function () {
          return {
            title: "Share To u!",
            path: "/pages/index/index",
            imageUrl: "https://wx1.sinaimg.cn/mw690/808296b0ly1gls4ztz2vuj20m80m8wia.jpg"
          }
        }
      }, pageConfig);
      //3. 配置页面模板
      PageTmp(pageConfig);
    }
  }();
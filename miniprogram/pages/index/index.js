//index.js
const app = getApp()
const music = wx.createInnerAudioContext();
Page({
  data: {
    musicSwitch: true,
    navbarHeight: app.globalData.navbarHeight,
    statusBarHeight: app.globalData.statusBarHeight,
    cusnavH: app.globalData.cusnavH,
    currentIndex: 0,
    scrollViewHeight: null,
    testPhoto:[
      'https://wx2.sinaimg.cn/mw690/808296b0ly1gls4zwaeb6j20m80m8teb.jpg',
      'https://wx1.sinaimg.cn/mw690/808296b0ly1gls4zw5sk8j20m80m8dlt.jpg',
      'https://wx2.sinaimg.cn/mw690/808296b0ly1gls4zu1cttj20m80m878e.jpg',
      'https://wx1.sinaimg.cn/mw690/808296b0ly1gls4zualynj20m80m845f.jpg'
    ]
  },

  onLoad: function() {
    this.getMusic();
  },

  // 获取媒体
  getMusic(){
    music.autoplay = true;
    music.src = 'https://s128.xiami.net/158/7158/168173/2075096_975301_l.mp3?ccode=xiami_web_web&expire=86400&duration=269&psid=8a1870146e0255086b58166b43d6a073&ups_client_netip=14.127.120.93&ups_ts=1608418480&ups_userid=0&utid=jGWQF3pnHn8CAQ5/emz04APr&vid=2075096&fn=2075096_975301_l.mp3&vkey=B3806dfe0e600d54f3950bc6ed28bb024';
    music.play();
    music.loop = true	// 是否循环播放
  },
  // 点击暂停与播放
  handleToSwitch(){
    this.data.musicSwitch? music.pause() : music.play()
    this.setData({
      musicSwitch: !this.data.musicSwitch
    })
  },
  // 滑动切换内容
  handleToChange(e){
    var tar = e.detail.current;
    this.setData({
      currentIndex: tar
    })
  },
  // 点击切换内容
  handleToTap(e){
    var tar = currentTarget.dataset.index;
    this.setData({
      currentIndex: tar
    })
  },
  // 获取计算的高度
  onReady() {
    let windowHeight = wx.getSystemInfoSync().windowHeight;
    let query = wx.createSelectorQuery().in(this);
    let scrollViewHeight = null;
    let scrollViewTop = null;
    query.selectAll('.swiper').boundingClientRect();
    query.exec((rect) => {
      console.log(rect, 'this is rect')
      scrollViewTop = rect[0][0].top;
      scrollViewHeight = windowHeight - scrollViewTop - 50;
      this.setData({
        scrollViewHeight
      })
    })
  },
  // 点击预览图片
  handleToPreview(e){
    var current = e.currentTarget.dataset.src;
    var photoList = this.data.testPhoto;
    wx.previewImage({
      current,
      urls: photoList
    })
  }
})

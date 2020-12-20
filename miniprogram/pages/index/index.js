//index.js
const app = getApp()
const music = wx.createInnerAudioContext();
Page({
  data: {
    musicSwitch: true
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
  }
})

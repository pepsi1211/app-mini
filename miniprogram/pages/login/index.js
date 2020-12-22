// pages/login/index.js
import { showToast, getSetting, openSetting } from '../../utils/utils'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onLoad: function (options) {
    getSetting();
  },
  handleToLogin(e){
    console.log(e)
    var userInfo = e.detail.userInfo;
    if(userInfo){
      wx.setStorageSync('userInfo', {time: new Date(),data: userInfo})
      wx.redirectTo({
        url: '/pages/index/index'
      })
    }else{
      showToast({title:'很遗憾~'})
    }
  }
})
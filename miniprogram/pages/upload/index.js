// pages/upload/index.js
const app = getApp()
import { chooseImage, showToast } from '../../utils/utils'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarHeight: app.globalData.navbarHeight,
    statusBarHeight: app.globalData.statusBarHeight,
    cusnavH: app.globalData.cusnavH,
    imgList: [],
    remark: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleToSelect(){
    chooseImage({count: 4}).then(res=>{
      var imgList = res.tempFilePaths;
      console.log(imgList);
      showToast({title:'选择成功'})
      this.setData({
        imgList
      })
    })
  }
})
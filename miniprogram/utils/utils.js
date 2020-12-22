//弹框轻提示
// 显示消息提示框
export function showToast({
  title,
  icon = "none"
}) {
  return new Promise((resolve, reject) => {
    wx.showToast({
      title: title,
      icon: icon,
      mask: true,
      duration: 1500,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}

// Promise 形式 的 openSetting
// 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
export function openSetting() {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err)
      }
    });
  });
}

// Promise 形式 的 getSetting
// 获取用户当前位置
export function getSetting() {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err)
      }
    });
  });
}

// 选择图片
export function chooseImage({
  count
}) {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count,
      sizeType: 'compressed',
      sourceType: 'album',
      success: (res)=>{
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}
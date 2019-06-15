//index.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    motto: '田园装饰报价',
    isSubmit: false,
    userInfo: {},
    phone: "",
    name: "",
    area: "",
    // formValue: {},

    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //30.1071178871,104.6337890625
    longitude: 104.6337890625,
    latitude: 30.1071178871,
    // polyline:21,
    // markers:"22222",
    mobileLocation: {//移动选择位置数据
      longitude: 0,
      latitude: 0,
      address: '',
    },

    markers: [{
      iconPath: '../../images/logo.png',
      id: 0,
      latitude: 30.1071178871,
      longitude: 104.6337890625,
      width: 30,
      height: 30,
      title: "【田园装饰】\n网络营销领导者，让公司业绩倍增\n倍增热线：xxxx",
      callout: {
        content: "【田园装饰】\n网络营销领导者，让公司业绩倍增\n倍增热线：xxxx",
        color: "#2c8df6",
        fontSize: 20,
        borderRadius: 10,
        bgColor: "#fff",
        display: "ALWAYS",
        boxShadow: "2px 2px 10px #aaa"
      },
      label: {
        color: "#000",
        fontSize: 12,
        content: "为标记点旁边增加标签",
        x: 34.780439,
        y: 113.699774
      }
    }],
    polyline: [{
      points: [{
        latitude: 34.780254,
        longitude: 104.6337890625

      }, {
        longitude: 104.6337890625,
        latitude: 34.779778
      }],
      color: "#ff6600",
      width: 20,
      dottedLine: false,
      arrowLine: true,
      borderColor: "#000",
      borderWidth: 5
    }],
    controls: [{
      id: 1,
      iconPath: '../../images/icon_cate.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]

  },
  // //事件处理函数
  // bindViewTap() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  formSubmit: function (e:any) {

    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    let { phone, area, name } = e.detail.value;
    if (!phone) {
      this.setData!({
        warn: "手机号为空！",
        isSubmit: true
      })
      return;
    }; 
    if (!area) {
      this.setData!({
        warn: "手机号为空！",
        isSubmit: true
      })
      return;
    }; 
    if (!name) {
      this.setData!({
        warn: "手机号为空！",
        isSubmit: true
      })
      return;
    }
    this.setData!({
      warn: "",
      isSubmit: true,
      phone,
      name,
      area,
      // sex
    })

    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  onLoad() {
    console.log('onload')
    if (app.globalData.userInfo) {
      this.setData!({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData!({
          userInfo: res,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData!({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  // getUserInfo(e: any) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData!({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})

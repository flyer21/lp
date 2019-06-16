"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AV = require("../../libs/av-weapp-min.js");
var app = getApp();
Page({
    data: {
        motto: '田园装饰报价',
        isSubmit: false,
        userInfo: {},
        phone: "",
        name: "",
        area: "",
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        longitude: 104.6337890625,
        latitude: 30.1071178871,
        mobileLocation: {
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
    formSubmit: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        var _a = e.detail.value, phone = _a.phone, area = _a.area, name = _a.name;
        if (!phone) {
            this.setData({
                warn: "手机号为空！",
                isSubmit: true
            });
            return;
        }
        ;
        if (!area) {
            this.setData({
                warn: "面积为空！",
                isSubmit: true
            });
            return;
        }
        ;
        if (!name) {
            this.setData({
                warn: "姓名为空！",
                isSubmit: true
            });
            return;
        }
        var data = {
            warn: "",
            isSubmit: true,
            phone: phone,
            name: name,
            area: area,
        };
        var APP_ID = 'RFUC5CFPuJivPzoAYM7XHWRH-gzGzoHsz';
        var APP_KEY = 'HsWAUAeFat2K2aJOpAuo2TIy';
        AV.init({
            appId: APP_ID,
            appKey: APP_KEY
        });
        var Customer = AV.Object.extend('Customer');
        var customer = new Customer();
        var me = this;
        customer.save(data).then(function (object) {
            console.info('LeanCloud Rocks!' + object);
            me.setData(data);
        });
    },
    formReset: function () {
        console.log('form发生了reset事件');
    },
    onLoad: function () {
        var _this = this;
        console.log('onload');
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res,
                    hasUserInfo: true
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                }
            });
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdBLCtDQUFtRDtBQUNuRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsUUFBUTtRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFHUixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUVuRCxTQUFTLEVBQUUsY0FBYztRQUN6QixRQUFRLEVBQUUsYUFBYTtRQUd2QixjQUFjLEVBQUU7WUFDZCxTQUFTLEVBQUUsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDO1lBQ1gsT0FBTyxFQUFFLEVBQUU7U0FDWjtRQUVELE9BQU8sRUFBRSxDQUFDO2dCQUNSLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixTQUFTLEVBQUUsY0FBYztnQkFDekIsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLG9DQUFvQztnQkFDM0MsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxvQ0FBb0M7b0JBQzdDLEtBQUssRUFBRSxTQUFTO29CQUNoQixRQUFRLEVBQUUsRUFBRTtvQkFDWixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLE1BQU07b0JBQ2YsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLFNBQVMsRUFBRSxtQkFBbUI7aUJBQy9CO2dCQUNELEtBQUssRUFBRTtvQkFDTCxLQUFLLEVBQUUsTUFBTTtvQkFDYixRQUFRLEVBQUUsRUFBRTtvQkFD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QTVCQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRXJCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0NBVUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbi8vIGRlY2xhcmUgbGV0IEFWOiBhbnk7XG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xuLy8gZGVjbGFyZSBjb25zdCByZXF1aXJlOiBhbnk7IC8vIDwtLSDmlrDlop5cbi8vIGV4cG9ydCBkZWNsYXJlIGNsYXNzIEFWIHtcbi8vICAgdHlwZTogc3RyaW5nO1xuLy8gICBtZXNzYWdlOiBzdHJpbmc7XG4vLyAgIGluaXQ6YW55XG4vLyB9XG4vLyBpbXBvcnQgIEFWIGZyb20gJy4uLy4uL2xpYnMvYXYtd2VhcHAtbWluJztcbmltcG9ydCBBViA9IHJlcXVpcmUgKCcuLi8uLi9saWJzL2F2LXdlYXBwLW1pbi5qcycpO1xuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG1vdHRvOiAn55Sw5Zut6KOF6aWw5oql5Lu3JyxcbiAgICBpc1N1Ym1pdDogZmFsc2UsXG4gICAgdXNlckluZm86IHt9LFxuICAgIHBob25lOiBcIlwiLFxuICAgIG5hbWU6IFwiXCIsXG4gICAgYXJlYTogXCJcIixcbiAgICAvLyBmb3JtVmFsdWU6IHt9LFxuXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICAvLzMwLjEwNzExNzg4NzEsMTA0LjYzMzc4OTA2MjVcbiAgICBsb25naXR1ZGU6IDEwNC42MzM3ODkwNjI1LFxuICAgIGxhdGl0dWRlOiAzMC4xMDcxMTc4ODcxLFxuICAgIC8vIHBvbHlsaW5lOjIxLFxuICAgIC8vIG1hcmtlcnM6XCIyMjIyMlwiLFxuICAgIG1vYmlsZUxvY2F0aW9uOiB7Ly/np7vliqjpgInmi6nkvY3nva7mlbDmja5cbiAgICAgIGxvbmdpdHVkZTogMCxcbiAgICAgIGxhdGl0dWRlOiAwLFxuICAgICAgYWRkcmVzczogJycsXG4gICAgfSxcblxuICAgIG1hcmtlcnM6IFt7XG4gICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9sb2dvLnBuZycsXG4gICAgICBpZDogMCxcbiAgICAgIGxhdGl0dWRlOiAzMC4xMDcxMTc4ODcxLFxuICAgICAgbG9uZ2l0dWRlOiAxMDQuNjMzNzg5MDYyNSxcbiAgICAgIHdpZHRoOiAzMCxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgICB0aXRsZTogXCLjgJDnlLDlm63oo4XppbDjgJFcXG7nvZHnu5zokKXplIDpooblr7zogIXvvIzorqnlhazlj7jkuJrnu6nlgI3lop5cXG7lgI3lop7ng63nur/vvJp4eHh4XCIsXG4gICAgICBjYWxsb3V0OiB7XG4gICAgICAgIGNvbnRlbnQ6IFwi44CQ55Sw5Zut6KOF6aWw44CRXFxu572R57uc6JCl6ZSA6aKG5a+86ICF77yM6K6p5YWs5Y+45Lia57up5YCN5aKeXFxu5YCN5aKe54Ot57q/77yaeHh4eFwiLFxuICAgICAgICBjb2xvcjogXCIjMmM4ZGY2XCIsXG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgYmdDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiQUxXQVlTXCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIycHggMnB4IDEwcHggI2FhYVwiXG4gICAgICB9LFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGNvbnRlbnQ6IFwi5Li65qCH6K6w54K55peB6L655aKe5Yqg5qCH562+XCIsXG4gICAgICAgIHg6IDM0Ljc4MDQzOSxcbiAgICAgICAgeTogMTEzLjY5OTc3NFxuICAgICAgfVxuICAgIH1dLFxuICAgIHBvbHlsaW5lOiBbe1xuICAgICAgcG9pbnRzOiBbe1xuICAgICAgICBsYXRpdHVkZTogMzQuNzgwMjU0LFxuICAgICAgICBsb25naXR1ZGU6IDEwNC42MzM3ODkwNjI1XG5cbiAgICAgIH0sIHtcbiAgICAgICAgbG9uZ2l0dWRlOiAxMDQuNjMzNzg5MDYyNSxcbiAgICAgICAgbGF0aXR1ZGU6IDM0Ljc3OTc3OFxuICAgICAgfV0sXG4gICAgICBjb2xvcjogXCIjZmY2NjAwXCIsXG4gICAgICB3aWR0aDogMjAsXG4gICAgICBkb3R0ZWRMaW5lOiBmYWxzZSxcbiAgICAgIGFycm93TGluZTogdHJ1ZSxcbiAgICAgIGJvcmRlckNvbG9yOiBcIiMwMDBcIixcbiAgICAgIGJvcmRlcldpZHRoOiA1XG4gICAgfV0sXG4gICAgY29udHJvbHM6IFt7XG4gICAgICBpZDogMSxcbiAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2ljb25fY2F0ZS5wbmcnLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAzMDAgLSA1MCxcbiAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICBoZWlnaHQ6IDUwXG4gICAgICB9LFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfV1cblxuICB9LFxuICAvLyAvL+S6i+S7tuWkhOeQhuWHveaVsFxuICAvLyBiaW5kVmlld1RhcCgpIHtcbiAgLy8gICB3eC5uYXZpZ2F0ZVRvKHtcbiAgLy8gICAgIHVybDogJy4uL2xvZ3MvbG9ncydcbiAgLy8gICB9KVxuICAvLyB9LFxuICBmb3JtU3VibWl0OiBmdW5jdGlvbiAoZTogYW55KSB7XG5cbiAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKTtcbiAgICBsZXQgeyBwaG9uZSwgYXJlYSwgbmFtZSB9ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgaWYgKCFwaG9uZSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHdhcm46IFwi5omL5py65Y+35Li656m677yBXCIsXG4gICAgICAgIGlzU3VibWl0OiB0cnVlXG4gICAgICB9KVxuICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgaWYgKCFhcmVhKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgd2FybjogXCLpnaLnp6/kuLrnqbrvvIFcIixcbiAgICAgICAgaXNTdWJtaXQ6IHRydWVcbiAgICAgIH0pXG4gICAgICByZXR1cm47XG4gICAgfTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICB3YXJuOiBcIuWnk+WQjeS4uuepuu+8gVwiLFxuICAgICAgICBpc1N1Ym1pdDogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICB3YXJuOiBcIlwiLFxuICAgICAgaXNTdWJtaXQ6IHRydWUsXG4gICAgICBwaG9uZSxcbiAgICAgIG5hbWUsXG4gICAgICBhcmVhLFxuICAgICAgLy8gc2V4XG4gICAgfTtcblxuXG4gICAgdmFyIEFQUF9JRCA9ICdSRlVDNUNGUHVKaXZQem9BWU03WEhXUkgtZ3pHem9Ic3onO1xuICAgIC8vIFJGVUM1Q0ZQdUppdlB6b0FZTTdYSFdSSCAtIGd6R3pvSHN6XG4gICAgdmFyIEFQUF9LRVkgPSAnSHNXQVVBZUZhdDJLMmFKT3BBdW8yVEl5JztcbiAgICBBVi5pbml0KHtcbiAgICAgIGFwcElkOiBBUFBfSUQsXG4gICAgICBhcHBLZXk6IEFQUF9LRVlcbiAgICB9KTtcblxuICAgIHZhciBDdXN0b21lciA9IEFWLk9iamVjdC5leHRlbmQoJ0N1c3RvbWVyJyk7XG4gICAgdmFyIGN1c3RvbWVyID0gbmV3IEN1c3RvbWVyKCk7XG4gICAgbGV0IG1lID0gdGhpcztcbiAgICBjdXN0b21lci5zYXZlKGRhdGEpLnRoZW4oZnVuY3Rpb24gKG9iamVjdDogYW55KSB7XG4gICAgICBjb25zb2xlLmluZm8oJ0xlYW5DbG91ZCBSb2NrcyEnICsgb2JqZWN0KTtcbiAgICAgIG1lLnNldERhdGEhKGRhdGEpXG4gICAgfSlcblxuICAgIC8vIHd4Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIC8vIH0pXG4gIH0sXG4gIGZvcm1SZXNldDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7YnKVxuICB9LFxuXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnb25sb2FkJylcblxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIC8vIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gIC8vICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xuICAvLyAgIHRoaXMuc2V0RGF0YSEoe1xuICAvLyAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAvLyAgICAgaGFzVXNlckluZm86IHRydWVcbiAgLy8gICB9KVxuICAvLyB9XG59KVxuIl19
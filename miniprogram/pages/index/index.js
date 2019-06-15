"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                warn: "手机号为空！",
                isSubmit: true
            });
            return;
        }
        ;
        if (!name) {
            this.setData({
                warn: "手机号为空！",
                isSubmit: true
            });
            return;
        }
        this.setData({
            warn: "",
            isSubmit: true,
            phone: phone,
            name: name,
            area: area,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxRQUFRO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxFQUFFO1FBQ1QsSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUdSLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFFBQVEsRUFBRSxhQUFhO1FBR3ZCLGNBQWMsRUFBRTtZQUNkLFNBQVMsRUFBRSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUM7WUFDWCxPQUFPLEVBQUUsRUFBRTtTQUNaO1FBRUQsT0FBTyxFQUFFLENBQUM7Z0JBQ1IsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFNBQVMsRUFBRSxjQUFjO2dCQUN6QixLQUFLLEVBQUUsRUFBRTtnQkFDVCxNQUFNLEVBQUUsRUFBRTtnQkFDVixLQUFLLEVBQUUsb0NBQW9DO2dCQUMzQyxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLG9DQUFvQztvQkFDN0MsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUUsUUFBUTtvQkFDakIsU0FBUyxFQUFFLG1CQUFtQjtpQkFDL0I7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLEtBQUssRUFBRSxNQUFNO29CQUNiLFFBQVEsRUFBRSxFQUFFO29CQUNaLE9BQU8sRUFBRSxZ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R0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0NBVUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcblxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG1vdHRvOiAn55Sw5Zut6KOF6aWw5oql5Lu3JyxcbiAgICBpc1N1Ym1pdDogZmFsc2UsXG4gICAgdXNlckluZm86IHt9LFxuICAgIHBob25lOiBcIlwiLFxuICAgIG5hbWU6IFwiXCIsXG4gICAgYXJlYTogXCJcIixcbiAgICAvLyBmb3JtVmFsdWU6IHt9LFxuXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICAvLzMwLjEwNzExNzg4NzEsMTA0LjYzMzc4OTA2MjVcbiAgICBsb25naXR1ZGU6IDEwNC42MzM3ODkwNjI1LFxuICAgIGxhdGl0dWRlOiAzMC4xMDcxMTc4ODcxLFxuICAgIC8vIHBvbHlsaW5lOjIxLFxuICAgIC8vIG1hcmtlcnM6XCIyMjIyMlwiLFxuICAgIG1vYmlsZUxvY2F0aW9uOiB7Ly/np7vliqjpgInmi6nkvY3nva7mlbDmja5cbiAgICAgIGxvbmdpdHVkZTogMCxcbiAgICAgIGxhdGl0dWRlOiAwLFxuICAgICAgYWRkcmVzczogJycsXG4gICAgfSxcblxuICAgIG1hcmtlcnM6IFt7XG4gICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9sb2dvLnBuZycsXG4gICAgICBpZDogMCxcbiAgICAgIGxhdGl0dWRlOiAzMC4xMDcxMTc4ODcxLFxuICAgICAgbG9uZ2l0dWRlOiAxMDQuNjMzNzg5MDYyNSxcbiAgICAgIHdpZHRoOiAzMCxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgICB0aXRsZTogXCLjgJDnlLDlm63oo4XppbDjgJFcXG7nvZHnu5zokKXplIDpooblr7zogIXvvIzorqnlhazlj7jkuJrnu6nlgI3lop5cXG7lgI3lop7ng63nur/vvJp4eHh4XCIsXG4gICAgICBjYWxsb3V0OiB7XG4gICAgICAgIGNvbnRlbnQ6IFwi44CQ55Sw5Zut6KOF6aWw44CRXFxu572R57uc6JCl6ZSA6aKG5a+86ICF77yM6K6p5YWs5Y+45Lia57up5YCN5aKeXFxu5YCN5aKe54Ot57q/77yaeHh4eFwiLFxuICAgICAgICBjb2xvcjogXCIjMmM4ZGY2XCIsXG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgYmdDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiQUxXQVlTXCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIycHggMnB4IDEwcHggI2FhYVwiXG4gICAgICB9LFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGNvbnRlbnQ6IFwi5Li65qCH6K6w54K55peB6L655aKe5Yqg5qCH562+XCIsXG4gICAgICAgIHg6IDM0Ljc4MDQzOSxcbiAgICAgICAgeTogMTEzLjY5OTc3NFxuICAgICAgfVxuICAgIH1dLFxuICAgIHBvbHlsaW5lOiBbe1xuICAgICAgcG9pbnRzOiBbe1xuICAgICAgICBsYXRpdHVkZTogMzQuNzgwMjU0LFxuICAgICAgICBsb25naXR1ZGU6IDEwNC42MzM3ODkwNjI1XG5cbiAgICAgIH0sIHtcbiAgICAgICAgbG9uZ2l0dWRlOiAxMDQuNjMzNzg5MDYyNSxcbiAgICAgICAgbGF0aXR1ZGU6IDM0Ljc3OTc3OFxuICAgICAgfV0sXG4gICAgICBjb2xvcjogXCIjZmY2NjAwXCIsXG4gICAgICB3aWR0aDogMjAsXG4gICAgICBkb3R0ZWRMaW5lOiBmYWxzZSxcbiAgICAgIGFycm93TGluZTogdHJ1ZSxcbiAgICAgIGJvcmRlckNvbG9yOiBcIiMwMDBcIixcbiAgICAgIGJvcmRlcldpZHRoOiA1XG4gICAgfV0sXG4gICAgY29udHJvbHM6IFt7XG4gICAgICBpZDogMSxcbiAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2ljb25fY2F0ZS5wbmcnLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAzMDAgLSA1MCxcbiAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICBoZWlnaHQ6IDUwXG4gICAgICB9LFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfV1cblxuICB9LFxuICAvLyAvL+S6i+S7tuWkhOeQhuWHveaVsFxuICAvLyBiaW5kVmlld1RhcCgpIHtcbiAgLy8gICB3eC5uYXZpZ2F0ZVRvKHtcbiAgLy8gICAgIHVybDogJy4uL2xvZ3MvbG9ncydcbiAgLy8gICB9KVxuICAvLyB9LFxuICBmb3JtU3VibWl0OiBmdW5jdGlvbiAoZTphbnkpIHtcblxuICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpO1xuICAgIGxldCB7IHBob25lLCBhcmVhLCBuYW1lIH0gPSBlLmRldGFpbC52YWx1ZTtcbiAgICBpZiAoIXBob25lKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgd2FybjogXCLmiYvmnLrlj7fkuLrnqbrvvIFcIixcbiAgICAgICAgaXNTdWJtaXQ6IHRydWVcbiAgICAgIH0pXG4gICAgICByZXR1cm47XG4gICAgfTsgXG4gICAgaWYgKCFhcmVhKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgd2FybjogXCLmiYvmnLrlj7fkuLrnqbrvvIFcIixcbiAgICAgICAgaXNTdWJtaXQ6IHRydWVcbiAgICAgIH0pXG4gICAgICByZXR1cm47XG4gICAgfTsgXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgd2FybjogXCLmiYvmnLrlj7fkuLrnqbrvvIFcIixcbiAgICAgICAgaXNTdWJtaXQ6IHRydWVcbiAgICAgIH0pXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgd2FybjogXCJcIixcbiAgICAgIGlzU3VibWl0OiB0cnVlLFxuICAgICAgcGhvbmUsXG4gICAgICBuYW1lLFxuICAgICAgYXJlYSxcbiAgICAgIC8vIHNleFxuICAgIH0pXG5cbiAgICAvLyB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgIHVybDogJy4uL2xvZ3MvbG9ncydcbiAgICAvLyB9KVxuICB9LFxuICBmb3JtUmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcbiAgfSxcblxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ29ubG9hZCcpXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSl7XG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlckluZm86IHJlcyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICAvLyBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAvLyAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgLy8gICB0aGlzLnNldERhdGEhKHtcbiAgLy8gICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgLy8gICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gIC8vICAgfSlcbiAgLy8gfVxufSlcbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '田园装饰报价',
        isSubmit: false,
        phone: "",
        name: "",
        area: "",
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
        console.log('onload');
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxRQUFRO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFFZixLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFNUixTQUFTLEVBQUUsY0FBYztRQUN6QixRQUFRLEVBQUUsYUFBYTtRQUd2QixjQUFjLEVBQUU7WUFDZCxTQUFTLEVBQUUsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDO1lBQ1gsT0FBTyxFQUFFLEVBQUU7U0FDWjtRQUVELE9BQU8sRUFBRSxDQUFDO2dCQUNSLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixTQUFTLEVBQUUsY0FBYztnQkFDekIsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLG9DQUFvQztnQkFDM0MsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxvQ0FBb0M7b0JBQzdDLEtBQUssRUFBRSxTQUFTO29CQUNoQixRQUFRLEVBQUUsRUFBRTtvQkFDWixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLE1BQU07b0JBQ2YsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLFNBQVMsRUFBRSxtQkFBbUI7aUJBQy9CO2dCQUNELEtBQUssRUFBRTtvQkFDTCxLQUFLLEVBQUUsTUFBTTtvQkFDYixRQUFRLEVBQUUsRUFBRTtvQkFDWixPQUFPLEVBQUUsWUFBWTtvQkFDckIsQ0FBQyxFQUFFLFNBQVM7b0JBQ1osQ0FBQyxFQUFFLFVBQVU7aUJBQ2Q7YUFDRixDQUFDO1FBQ0YsUUFBUSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFNBQVMsRUFBRSxjQUFjO3FCQUUxQixFQUFFO3dCQUNELFNBQVMsRUFBRSxjQUFjO3dCQUN6QixRQUFRLEVBQUUsU0FBUztxQkFDcEIsQ0FBQztnQkFDRixLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFdBQVcsRUFBRSxNQUFNO2dCQUNuQixXQUFXLEVBQUUsQ0FBQzthQUNmLENBQUM7UUFDRixRQUFRLEVBQUUsQ0FBQztnQkFDVCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLENBQUM7b0JBQ1AsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFO29CQUNiLEtBQUssRUFBRSxFQUFFO29CQUNULE1BQU0sRUFBRSxFQUFFO2lCQUNYO2dCQUNELFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUM7S0FFSDtJQU9ELFVBQVUsRUFBRSxVQUFVLENBQUM7UUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUEsbUJBQXNDLEVBQXBDLGdCQUFLLEVBQUUsY0FBSSxFQUFFLGNBQXVCLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUE7WUFDRixPQUFPO1NBQ1I7UUFBQSxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUE7WUFDRixPQUFPO1NBQ1I7UUFBQSxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUE7WUFDRixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssT0FBQTtZQUNMLElBQUksTUFBQTtZQUNKLElBQUksTUFBQTtTQUVMLENBQUMsQ0FBQTtJQUtKLENBQUM7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBMkJ2QixDQUFDO0NBVUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcblxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG1vdHRvOiAn55Sw5Zut6KOF6aWw5oql5Lu3JyxcbiAgICBpc1N1Ym1pdDogZmFsc2UsXG4gICAgLy8gdXNlckluZm86IHt9LFxuICAgIHBob25lOiBcIlwiLFxuICAgIG5hbWU6IFwiXCIsXG4gICAgYXJlYTogXCJcIixcbiAgICAvLyBmb3JtVmFsdWU6IHt9LFxuXG4gICAgLy8gaGFzVXNlckluZm86IGZhbHNlLFxuICAgIC8vIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICAvLzMwLjEwNzExNzg4NzEsMTA0LjYzMzc4OTA2MjVcbiAgICBsb25naXR1ZGU6IDEwNC42MzM3ODkwNjI1LFxuICAgIGxhdGl0dWRlOiAzMC4xMDcxMTc4ODcxLFxuICAgIC8vIHBvbHlsaW5lOjIxLFxuICAgIC8vIG1hcmtlcnM6XCIyMjIyMlwiLFxuICAgIG1vYmlsZUxvY2F0aW9uOiB7Ly/np7vliqjpgInmi6nkvY3nva7mlbDmja5cbiAgICAgIGxvbmdpdHVkZTogMCxcbiAgICAgIGxhdGl0dWRlOiAwLFxuICAgICAgYWRkcmVzczogJycsXG4gICAgfSxcblxuICAgIG1hcmtlcnM6IFt7XG4gICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9sb2dvLnBuZycsXG4gICAgICBpZDogMCxcbiAgICAgIGxhdGl0dWRlOiAzMC4xMDcxMTc4ODcxLFxuICAgICAgbG9uZ2l0dWRlOiAxMDQuNjMzNzg5MDYyNSxcbiAgICAgIHdpZHRoOiAzMCxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgICB0aXRsZTogXCLjgJDnlLDlm63oo4XppbDjgJFcXG7nvZHnu5zokKXplIDpooblr7zogIXvvIzorqnlhazlj7jkuJrnu6nlgI3lop5cXG7lgI3lop7ng63nur/vvJp4eHh4XCIsXG4gICAgICBjYWxsb3V0OiB7XG4gICAgICAgIGNvbnRlbnQ6IFwi44CQ55Sw5Zut6KOF6aWw44CRXFxu572R57uc6JCl6ZSA6aKG5a+86ICF77yM6K6p5YWs5Y+45Lia57up5YCN5aKeXFxu5YCN5aKe54Ot57q/77yaeHh4eFwiLFxuICAgICAgICBjb2xvcjogXCIjMmM4ZGY2XCIsXG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgYmdDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiQUxXQVlTXCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIycHggMnB4IDEwcHggI2FhYVwiXG4gICAgICB9LFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGNvbnRlbnQ6IFwi5Li65qCH6K6w54K55peB6L655aKe5Yqg5qCH562+XCIsXG4gICAgICAgIHg6IDM0Ljc4MDQzOSxcbiAgICAgICAgeTogMTEzLjY5OTc3NFxuICAgICAgfVxuICAgIH1dLFxuICAgIHBvbHlsaW5lOiBbe1xuICAgICAgcG9pbnRzOiBbe1xuICAgICAgICBsYXRpdHVkZTogMzQuNzgwMjU0LFxuICAgICAgICBsb25naXR1ZGU6IDEwNC42MzM3ODkwNjI1XG5cbiAgICAgIH0sIHtcbiAgICAgICAgbG9uZ2l0dWRlOiAxMDQuNjMzNzg5MDYyNSxcbiAgICAgICAgbGF0aXR1ZGU6IDM0Ljc3OTc3OFxuICAgICAgfV0sXG4gICAgICBjb2xvcjogXCIjZmY2NjAwXCIsXG4gICAgICB3aWR0aDogMjAsXG4gICAgICBkb3R0ZWRMaW5lOiBmYWxzZSxcbiAgICAgIGFycm93TGluZTogdHJ1ZSxcbiAgICAgIGJvcmRlckNvbG9yOiBcIiMwMDBcIixcbiAgICAgIGJvcmRlcldpZHRoOiA1XG4gICAgfV0sXG4gICAgY29udHJvbHM6IFt7XG4gICAgICBpZDogMSxcbiAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2ljb25fY2F0ZS5wbmcnLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAzMDAgLSA1MCxcbiAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICBoZWlnaHQ6IDUwXG4gICAgICB9LFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfV1cblxuICB9LFxuICAvLyAvL+S6i+S7tuWkhOeQhuWHveaVsFxuICAvLyBiaW5kVmlld1RhcCgpIHtcbiAgLy8gICB3eC5uYXZpZ2F0ZVRvKHtcbiAgLy8gICAgIHVybDogJy4uL2xvZ3MvbG9ncydcbiAgLy8gICB9KVxuICAvLyB9LFxuICBmb3JtU3VibWl0OiBmdW5jdGlvbiAoZSkge1xuXG4gICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSk7XG4gICAgbGV0IHsgcGhvbmUsIGFyZWEsIG5hbWUgfSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIGlmICghcGhvbmUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHdhcm46IFwi5omL5py65Y+35Li656m677yBXCIsXG4gICAgICAgIGlzU3VibWl0OiB0cnVlXG4gICAgICB9KVxuICAgICAgcmV0dXJuO1xuICAgIH07IFxuICAgIGlmICghYXJlYSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgd2FybjogXCLmiYvmnLrlj7fkuLrnqbrvvIFcIixcbiAgICAgICAgaXNTdWJtaXQ6IHRydWVcbiAgICAgIH0pXG4gICAgICByZXR1cm47XG4gICAgfTsgXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB3YXJuOiBcIuaJi+acuuWPt+S4uuepuu+8gVwiLFxuICAgICAgICBpc1N1Ym1pdDogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHdhcm46IFwiXCIsXG4gICAgICBpc1N1Ym1pdDogdHJ1ZSxcbiAgICAgIHBob25lLFxuICAgICAgbmFtZSxcbiAgICAgIGFyZWEsXG4gICAgICAvLyBzZXhcbiAgICB9KVxuXG4gICAgLy8gd3gubmF2aWdhdGVUbyh7XG4gICAgLy8gICB1cmw6ICcuLi9sb2dzL2xvZ3MnXG4gICAgLy8gfSlcbiAgfSxcbiAgZm9ybVJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZyZXNldOS6i+S7ticpXG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ29ubG9hZCcpXG4gICAgLy8gaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgLy8gICB0aGlzLnNldERhdGEhKHtcbiAgICAvLyAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuICAgIC8vICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAvLyAgIH0pXG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSl7XG4gICAgLy8gICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgIC8vICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgIC8vICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcbiAgICAvLyAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgLy8gICAgICAgdXNlckluZm86IHJlcyxcbiAgICAvLyAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuICAgIC8vICAgd3guZ2V0VXNlckluZm8oe1xuICAgIC8vICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgIC8vICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgLy8gICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgLy8gICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgIC8vICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgfSxcblxuICAvLyBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAvLyAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgLy8gICB0aGlzLnNldERhdGEhKHtcbiAgLy8gICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgLy8gICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gIC8vICAgfSlcbiAgLy8gfVxufSlcbiJdfQ==
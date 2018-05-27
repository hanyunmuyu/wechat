Page({
    data: {
        navIndex: 0,
        nav: [
            {
                id: 1,
                title: "小区"
            },
            {
                id: 2,
                title: "物业"
            },
            {
                id: 3,
                title: "成员"
            }
        ],
        dataList:[
            {

            }
        ],
        info: {
            name:"绿云公寓",
            address:"郑州市管城回族区货站北街31号",
            phone:"15701308875",
            tel:"0371-56609737",
            pic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526808794639&di=308f560a7d131e067a879d3f3619a65d&imgtype=0&src=http%3A%2F%2Ff3.v.veimg.cn%2Fmeadincms%2F1%2F2016%2F0504%2F20160504092916422.jpg",
            longitude:113.67739,
            latitude:34.75381
        },
        serviceInfo:{
            name:"绿云公寓物业",
            phone:"15701308876",
            tel:"0371-56609736",
            userName:"小张"
        },
        userList:{
            manager:[
                {
                    name:"我是管理员呀，啦啦啦啦",
                    avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526808794639&di=308f560a7d131e067a879d3f3619a65d&imgtype=0&src=http%3A%2F%2Ff3.v.veimg.cn%2Fmeadincms%2F1%2F2016%2F0504%2F20160504092916422.jpg"
                }
            ],
            users:[
                {
                    name:"寒云",
                    avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526808794639&di=308f560a7d131e067a879d3f3619a65d&imgtype=0&src=http%3A%2F%2Ff3.v.veimg.cn%2Fmeadincms%2F1%2F2016%2F0504%2F20160504092916422.jpg"
                },
                {
                    name:"寒云",
                    avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526808794639&di=308f560a7d131e067a879d3f3619a65d&imgtype=0&src=http%3A%2F%2Ff3.v.veimg.cn%2Fmeadincms%2F1%2F2016%2F0504%2F20160504092916422.jpg"
                },
                {
                    name:"寒云",
                    avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526808794639&di=308f560a7d131e067a879d3f3619a65d&imgtype=0&src=http%3A%2F%2Ff3.v.veimg.cn%2Fmeadincms%2F1%2F2016%2F0504%2F20160504092916422.jpg"
                },
                {
                    name:"寒云",
                    avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526808794639&di=308f560a7d131e067a879d3f3619a65d&imgtype=0&src=http%3A%2F%2Ff3.v.veimg.cn%2Fmeadincms%2F1%2F2016%2F0504%2F20160504092916422.jpg"
                }
            ]
        }
    },
    tab: function (e) {
        let index = e.currentTarget.dataset.index
        this.setData({
            navIndex: index
        })
    },
    callPhone:function(e){
        let phone=e.currentTarget.dataset.phone
        wx.makePhoneCall({
            phoneNumber:phone,
            success:function(){
                console.log("拨打电话成功！")
            },
            fail:function(){
                console.log("拨打电话失败！")
            }
        })
    },
    callTel:function(e){
        let tel=e.currentTarget.dataset.tel
        wx.makePhoneCall({
            phoneNumber: tel, //此号码并非真实电话号码，仅用于测试
            success:function(){
                console.log("拨打电话成功！")
            },
            fail:function(){
                console.log("拨打电话失败！")
            }
        })
    },
    onReady:function () {
        wx.setNavigationBarTitle({
            title: '绿云公寓'
        })
    }
})
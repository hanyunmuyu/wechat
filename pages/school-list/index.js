//logs.js
const util = require('../../utils/util.js')

Page({
    data: {
        nav: [
            {
                src: '/images/school.png',
                text: '校园',
                url: "/pages/school/index"
            },
            {
                src: '/images/club.png',
                text: '社团',
                url: "/pages/club/index"
            }
        ],
        activeIndex: 0,
        timer:null,
        areaList: [
            {
                id: 1,
                name: "郑州"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            },
            {
                id: 1,
                name: "许昌"
            }
        ],
        dataList:[]
    },
    click: function (e) {
        let id=e.currentTarget.dataset.id
        if (id !== this.activeIndex) {
            this.setData({
                activeIndex:id
            })
            this.loadData(id);
        }
    },
    scroll: function (e) {
        let scrollLeft = e.detail.scrollLeft;
        let index = Math.ceil(scrollLeft / 120)
        if (index !== this.activeIndex) {
            this.setData({
                activeIndex: index
            })
            this.loadData(index);
        }
    },
    loadData: function (index) {
        console.log(index)
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            wx.showLoading({
                title: '加载中',
                mask:true
            })
            setTimeout(function(){
                wx.hideLoading()
            },2000)
            if (index !== this.activeIndex) {
                console.log(index);
            }
        },500)
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: '校园列表'
        })
        let data = [];
        for (let a =0;a<20;a++){
            let tmp={
                id:a,
                name:"河南工业大学（莲花街校区）",
                img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527152387654&di=2ce3eba8de1d9d522df5e88c8a238093&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F415302.jpg",
                description:"河南工业大学（Henan University of Technology）位于河南省省会郑州，由河南省人民政府和国家粮食局共建，入选中西部高校基础能力建设工程、卓越工程师教育培养计划、卓越农林人才教育培养计划、2011计划。学校前身是中央粮食干部学校，是"
            }
            data.push(tmp);
        }
        this.setData({
            dataList:data
        })
    },
    onPullDownRefresh:function () {
        // wx.startPullDownRefresh()
        setTimeout(()=>{
            wx.stopPullDownRefresh()
        },1000)
    },
    onReachBottom:function () {
        console.log('加载更多')
    }
})

Page({
    data: {
        activeIndex: 1,
        timer:null,
        areaList: [
            {
                id: 1,
                name: "高校"
            },
            {
                id: 1,
                name: "社团"
            },
            {
                id: 1,
                name: "童鞋"
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
            title: '关注'
        })
        let data = [];
        for (let a =0;a<20;a++){
            let tmp={
                id:a,
                name:"河南工业大学（莲花街校区）",
                img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527152387654&di=2ce3eba8de1d9d522df5e88c8a238093&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F415302.jpg",
                description:"河南工业大学（Henan University of Technology）位于河南省省会郑州"
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

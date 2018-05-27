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
        recommendList: [
            {
                id: 1,
                name: "河南工业大学",
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527152387654&di=2ce3eba8de1d9d522df5e88c8a238093&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F415302.jpg"
            },
            {
                id: 1,
                name: "河南工业大学",
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527327350567&di=6571b6089f470abc29d6a19f5142c921&imgtype=0&src=http%3A%2F%2Fpic.gaokao.haedu.cn%2Fimage%2Fschool%2F140513042707373665.jpg"
            },
            {
                id: 1,
                name: "河南工业大学",
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527327350567&di=6571b6089f470abc29d6a19f5142c921&imgtype=0&src=http%3A%2F%2Fpic.gaokao.haedu.cn%2Fimage%2Fschool%2F140513042707373665.jpg"
            },
            {
                id: 1,
                name: "河南工业大学",
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527327350567&di=6571b6089f470abc29d6a19f5142c921&imgtype=0&src=http%3A%2F%2Fpic.gaokao.haedu.cn%2Fimage%2Fschool%2F140513042707373665.jpg"
            }
        ],
        imgUrls: [
            {
                id:1,
                title:"哈哈哈",
                img:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
            },
            {
                id:1,
                title:"哈哈哈",
                img:"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
            },
            {
                id:1,
                title:"哈哈哈",
                img:"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
            },
            {
                id:1,
                title:"哈哈哈",
                img:"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
            }
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000
    },
    changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: '高校'
        })
    }
})

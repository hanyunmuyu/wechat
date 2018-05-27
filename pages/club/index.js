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
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(log => {
                return util.formatTime(new Date(log))
            })
        })
    }
})

//logs.js
const util = require('../../utils/util.js')

Page({
    data: {
        recommendList: [
            {
                id: 1,
                name: "编程社团",
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527152387654&di=2ce3eba8de1d9d522df5e88c8a238093&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F415302.jpg"
            },
            {
                id: 1,
                name: "轮滑社团",
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
            },
            {
                id: 1,
                name: "舞蹈社团",
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527327350567&di=6571b6089f470abc29d6a19f5142c921&imgtype=0&src=http%3A%2F%2Fpic.gaokao.haedu.cn%2Fimage%2Fschool%2F140513042707373665.jpg"
            },
            {
                id: 1,
                name: "PS社团",
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
            }
        ],
        clubList:[
            {
                categoryName:"体育",
                categoryId:1,
                icon:"/images/sport.png",
                dataList:[
                    {
                        id: 1,
                        name: "编程社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527152387654&di=2ce3eba8de1d9d522df5e88c8a238093&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F415302.jpg"
                    },
                    {
                        id: 1,
                        name: "轮滑社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    },
                    {
                        id: 1,
                        name: "舞蹈社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527327350567&di=6571b6089f470abc29d6a19f5142c921&imgtype=0&src=http%3A%2F%2Fpic.gaokao.haedu.cn%2Fimage%2Fschool%2F140513042707373665.jpg"
                    },
                    {
                        id: 1,
                        name: "PS社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    },
                    {
                        id: 1,
                        name: "PS社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    },
                    {
                        id: 1,
                        name: "PS社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    },
                    {
                        id: 1,
                        name: "PS社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    },
                    {
                        id: 1,
                        name: "PS社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    },
                    {
                        id: 1,
                        name: "PS社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    }
                ]
            },
            {
                categoryName:"舞蹈艺术",
                categoryId:1,
                icon:"/images/dance.png",
                dataList:[
                    {
                        id: 1,
                        name: "编程社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527152387654&di=2ce3eba8de1d9d522df5e88c8a238093&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F415302.jpg"
                    },
                    {
                        id: 1,
                        name: "轮滑社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    },
                    {
                        id: 1,
                        name: "舞蹈社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527327350567&di=6571b6089f470abc29d6a19f5142c921&imgtype=0&src=http%3A%2F%2Fpic.gaokao.haedu.cn%2Fimage%2Fschool%2F140513042707373665.jpg"
                    },
                    {
                        id: 1,
                        name: "PS社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    }
                ]
            },
            {
                categoryName:"编程开发",
                icon:"/images/computer.png",
                categoryId:1,
                dataList:[
                    {
                        id: 1,
                        name: "编程社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527152387654&di=2ce3eba8de1d9d522df5e88c8a238093&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F415302.jpg"
                    },
                    {
                        id: 1,
                        name: "轮滑社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    },
                    {
                        id: 1,
                        name: "舞蹈社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527327350567&di=6571b6089f470abc29d6a19f5142c921&imgtype=0&src=http%3A%2F%2Fpic.gaokao.haedu.cn%2Fimage%2Fschool%2F140513042707373665.jpg"
                    },
                    {
                        id: 1,
                        name: "PS社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    }
                ]
            },
            {
                categoryName:"舞蹈艺术",
                categoryId:1,
                icon:"/images/dance.png",
                dataList:[
                    {
                        id: 1,
                        name: "编程社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527152387654&di=2ce3eba8de1d9d522df5e88c8a238093&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F415302.jpg"
                    },
                    {
                        id: 1,
                        name: "轮滑社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    },
                    {
                        id: 1,
                        name: "舞蹈社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527327350567&di=6571b6089f470abc29d6a19f5142c921&imgtype=0&src=http%3A%2F%2Fpic.gaokao.haedu.cn%2Fimage%2Fschool%2F140513042707373665.jpg"
                    },
                    {
                        id: 1,
                        name: "PS社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    }
                ]
            },
            {
                categoryName:"编程开发",
                icon:"/images/computer.png",
                categoryId:1,
                dataList:[
                    {
                        id: 1,
                        name: "编程社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527152387654&di=2ce3eba8de1d9d522df5e88c8a238093&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F415302.jpg"
                    },
                    {
                        id: 1,
                        name: "轮滑社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    },
                    {
                        id: 1,
                        name: "舞蹈社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527327350567&di=6571b6089f470abc29d6a19f5142c921&imgtype=0&src=http%3A%2F%2Fpic.gaokao.haedu.cn%2Fimage%2Fschool%2F140513042707373665.jpg"
                    },
                    {
                        id: 1,
                        name: "PS社团",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527336323395&di=72319c416cf9a4aed71af94a2c27696e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F32%2F48U58PICpwX_1024.jpg"
                    }
                ]
            }
        ]
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: '社团-列表'
        })
    }
})

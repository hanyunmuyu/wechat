Page({
    data: {
        tabIndex: 0,
        tabList: [
            {
                id: 1,
                title: "动态"
            },
            {
                id: 1,
                title: "成员"
            }
        ],
        activityDataList:[
            {
                id:1,
                title:"哈哈哈，二货程序员",
                userName:"寒云",
                userId:1,
                description:"简单的描述文字。。。。。你们这些逗比简单的描述文字。。。。。你们这些逗比简单的描述文字。。。。。你们这些逗比简单的描述文字。。。。。你们这些逗比简单的描述文字。。。。。你们这些逗比"
            },
            {
                id:1,
                title:"哈哈哈，二货程序员",
                userName:"寒云",
                userId:1,
                description:"简单的描述文字。。。。。你们这些逗比"
            },
            {
                id:1,
                title:"哈哈哈，二货程序员",
                userName:"寒云",
                userId:1,
                description:"简单的描述文字。。。。。你们这些逗比"
            },
            {
                id:1,
                title:"哈哈哈，二货程序员",
                userName:"寒云",
                userId:1,
                description:"简单的描述文字。。。。。你们这些逗比"
            },
            {
                id:1,
                title:"哈哈哈，二货程序员",
                userName:"寒云",
                userId:1,
                description:"简单的描述文字。。。。。你们这些逗比"
            },
            {
                id:1,
                title:"哈哈哈，二货程序员",
                userName:"寒云",
                userId:1,
                description:"简单的描述文字。。。。。你们这些逗比"
            },
            {
                id:1,
                title:"哈哈哈，二货程序员",
                userName:"寒云",
                userId:1,
                description:"简单的描述文字。。。。。你们这些逗比"
            }
        ]
    },
    select: function (e) {
        let id = e.currentTarget.dataset.id
        // console.log(e.currentTarget.dataset.id)
        this.setData({
            tabIndex: id
        })
    }
})

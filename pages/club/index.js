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
                title: "最新"
            },
            {
                id: 1,
                title: "成员"
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

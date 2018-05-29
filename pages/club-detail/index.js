Page({
    data: {
        tabIndex: 0,
        tabList: [
            {
                id: 1,
                title: "社团经典"
            },
            {
                id: 1,
                title: "社团动态"
            },
            {
                id: 1,
                title: "社团成员"
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

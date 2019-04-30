const routers = [
    {
        path: '/index',
        name: '概况',
        meta: {
            title: '概况'
        },
        component: (resolve) => require(['../views/index.vue'], resolve)
    },
    {
        path: '/productManage',
        name: '商品管理',
        meta: {
            title: '商品管理'
        },
        component: (resolve) => require(['../views/productManage/productManage.vue'], resolve)
    },
    {
        path: '/newProduct',
        name: '新建商品',
        meta: {
            title: '新建商品'
        },
        component: (resolve) => require(['../views/newProduct/newProduct.vue'], resolve)
    },
];
export default routers;
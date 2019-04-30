
const menu = [{
  path: '/index',
  name: '概况',
  icon: 'md-home',
  level: 1,
  children: [],
},{
  path: '/',
  name: '商品',
  icon: 'md-cart',
  level: 1,
  children: [{
    path: '/',
    name: '商品管理',
    level: 2,
    children: [{
      path: '/productManage',
      name: '商品管理',
      level: 2,
    },{
      path: '/newProduct',
      name: '新建商品',
      level: 3,
    }],
  },{
    path: '/list',
    name: '商品分类',
    level: 2,
    children: [],
  },{
    path: '/userInfo',
    name: '配送专区',
    level: 2,
    children: [],
  },{
    path: '/userList',
    name: '配送赠品',
    level: 2,
    children: [],
  }]
},{
  path: '/',
  name: '客户',
  level: 1,
  icon: 'ios-contacts',
  children: [{
    path: '/userList',
    name: '客户管理',
    level: 2,
    children: [],
  }]
},{
  path: '/',
  name: '订单',
  level: 1,
  icon: 'md-list-box',
  children: [{
    path: '/userList',
    name: '所有订单',
    level: 2,
    children: [],
  },{
    path: '/userList',
    name: '开票记录',
    level: 2,
    children: [],
  }]
}]

export default menu;
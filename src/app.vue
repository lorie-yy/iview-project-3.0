<template>
    <div class="app-wrapper" :class="{hideSidebar:!state.sidebar.opened}">
        <!-- 左侧菜单栏 -->
        <div class="side-wrapper light">
            <Menu width="200px" theme="light" @on-select="selectFn" :active-name="$route.path">
                <div v-for="(item,index) in menu " :key="index">
                    <Submenu :name="index" v-if="item.children && item.children.length>0 && !item.hidden">
                        <!-- 第一层 -->
                        <template slot="title">
                            <Icon :type="item.icon" />
                            <!-- <i class="icon iconfont " :class="item.icon ? item.icon :'icon-collection'"></i> -->
                            {{item.name}}
                        </template>
                        <div v-for="(second,i) in item.children" :key="index+'-'+i">
                            <Submenu :name="index+'-'+i" v-if="second.children && second.children.length>0 && !second.hidden">
                                <!-- 第二层 -->
                                <template slot="title">{{second.name}}</template>
                                <!-- 第三层（无孩子） -->
                                <MenuItem :name="third.path" v-for="(third,key) in second.children" :key="index+'-'+i+'-'+key" v-if="!third.hidden">
                                    {{third.name}}
                                </MenuItem>
                            </Submenu>
                            <!-- 第二层（无孩子） -->
                            <MenuItem :name="second.path" :key="index+'-'+i" v-if="second.children.length==0 && !second.hidden && second.level!=0 ">
                                {{second.name}}
                            </MenuItem>
                        </div>
                    </Submenu>
                    <!-- 第一层（无孩子） -->
                    <MenuItem :name="item.path" :key="index" v-if="item.children.length==0 && !item.hidden && item.level!=0 ">
                        <Icon :type="item.icon" />
                        <!-- <i class="icon iconfont " :class="item.icon ? item.icon :'icon-collection'"></i> -->
                        {{item.name}}
                    </MenuItem>
                </div>
            </Menu>
        </div>
        <!-- 主体 -->
        <div class="main-wrapper">
        <!-- 头部 -->
        <div class="header">
            <!-- 伸缩按钮 -->
            <div class="nav-icon" @click="toggleSideBar">
                <Icon type="md-menu" />
            </div>
            <!-- 面包屑 -->
            <Breadcrumb>
                <BreadcrumbItem>{{state.router.currentPageName}}</BreadcrumbItem>
            </Breadcrumb>
            <!-- 用户信息 -->
            <Dropdown class="userBox">
                <a href="javascript:void(0)">lorie <Icon type="ios-arrow-down" /></a>
                <Dropdown-menu slot="list">
                    <Dropdown-item @click.native="modalUser=true">个人信息</Dropdown-item>
                    <Dropdown-item @click.native="logout">退出登录</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
        </div>

        <!-- 内容部分 -->
        <div class="main-container">
            <div class="container">
                <div id="sticker">
                    <div id="stickerCon">
                        <!-- 路由 -->
                        <transition name="fade" mode="out-in">
                            <router-view @changeRouter="selectFn"></router-view>
                        </transition>
                    </div>
                </div>
                <div id="footer">©copyright by 想象力商城</div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import menu from './router/menu'
export default {
    data () {
        return {
            menu: menu,
            theme: 'light', // 主题
            themeBool: true,
            modalUser: false,
        }
    },
    computed: {
        state () {
            return this.$store.state.app
        }
    },
    mounted () {

    },
    beforeDestroy () {

    },
    methods: {
        // 菜单收缩按钮
        toggleSideBar () {
            this.$store.dispatch('ToggleSideBar')
        },
        // 切换路由 & 页面title
        selectFn (to) {
            this.$router.push({ path: to })
        },
        // 退出
        logout () {
            Cookies.remove('token')
            this.$router.push('/login')
            this.$Message.success('退出成功')
        },
    }
}
</script>
<style>
@import 'styles/common.less';
</style>

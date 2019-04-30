import iView from 'iview'
import Vue from 'vue'
Vue.use(iView)

const app = {
  state: {
    sidebar: {
      opened: true,
      // minOpen: false // 小屏时菜单状态
    },
    router: {
      currentPageName: '概况'
    },
  },
  mutations: {
    /**
     * 菜单的缩展
     */
    TOGGLE_SIDEBAR: state => {
      let winWidth = document.documentElement.clientWidth
      if (winWidth <= 600) {
        // state.sidebar.minOpen = !state.sidebar.minOpen
        state.sidebar.opened = false
        return
      } else {
        state.sidebar.opened = !state.sidebar.opened
      }
    },
    CLOSE_SLIDEBAR: state => {
      state.sidebar.opened = false
      // state.sidebar.minOpen = false
    },
    OPEN_SLIDEBAR: state => {
      state.sidebar.opened = true
    },
    /**
     * 面包屑
     */
    GET_CURRENT_PAGE_NAME: (state, payload) => {
      state.router.currentPageName = payload
    },
  },
  actions: {
    ToggleSideBar: ({commit}) => {
      commit('TOGGLE_SIDEBAR')
    },
    getCurrentPageName: ({commit}, payload) => {
      commit('GET_CURRENT_PAGE_NAME', payload)
    }
  }
}

export default app

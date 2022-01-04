import Vue from 'vue'
import VueRouter from 'vue-router'
import PageCustom1 from "@/components/content/page/page1/PageCustom1";
import PageCustom2 from "@/components/content/page/page2/PageCustom2";
import PageCustom3 from "@/components/content/page/page3/PageCustom3";
import PageCustom4 from "@/components/content/page/page4/PageCustom4";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/one',
    meta: {
      title: '首页'
    },
  },
  {
    path: '/one',
    component: PageCustom1,
    meta: {
      title: '首页'
    },
  },
  {
    path: '/two',
    component: PageCustom2
  },
  {
    path: '/three',
    component: PageCustom3
  },
  {
    path: '/four',
    component: PageCustom4
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的映象关系
  routes,
  mode: "history",
  linkActiveClass: 'active'
})

export default router
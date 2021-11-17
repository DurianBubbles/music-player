import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const Discovery = () => import('views/discovery/Discovery.vue')
const Playlists = () => import('views/playlists/Playlists.vue')
const Songs = () => import('views/songs/Songs.vue')
const Mvs = () => import('views/mvs/Mvs.vue')
const Detail = () => import('views/detail/Detail.vue')
const Layout = () => import('views/layout/Layout.vue')
const MvDetail = () => import('views/mvdetail/MvDetail.vue')
const SearchDetail = () => import('views/searchdetail/SearchDetail.vue')
const SearchSongs = () => import('views/searchdetail/childComps/SearchSongs.vue')
const SearchLists = () => import('views/searchdetail/childComps/SearchLists.vue')
const SearchMvs = () => import('views/searchdetail/childComps/SearchMvs.vue')



const routes = [
  {
    path: '/',
    redirect: '/layout/discovery'
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: 'discovery',
        component: Discovery
      },
      {
        path: 'playlists',
        component: Playlists
      },
      {
        path: 'songs',
        component: Songs
      },
      {
        path: 'mvs',
        component: Mvs
      },
      {
        path: 'detail/:id',
        component: Detail
      },
      {
        path:'search/:params',
        component:SearchDetail,
        children:[
          {
            path:'/layout/search/:params',
            redirect:'/layout/search/:params/songs'
          },
          {
            path:'songs',
            component:SearchSongs
          },
          {
            path:'lists',
            component:SearchLists
          },
          {
            path:'mvs',
            component:SearchMvs
          }
        ]
      }
    ]
  },
  {
    path:'/mvdetail',
    component:MvDetail
  }

]


const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
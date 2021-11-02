import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const Discovery = () => import('views/discovery/Discovery.vue')
const Playlists = () => import('views/playlists/Playlists.vue')
const Songs = () => import('views/songs/Songs.vue')
const Mvs = () => import('views/mvs/Mvs.vue')


const routes = [
    {
      path: '/',
      redirect:'/discovery'
    },
    {
      path:'/discovery',
      component:Discovery
    },
    {
      path:'/playlists',
      component:Playlists
    },
    {
      path:'/songs',
      component:Songs
    },
    {
      path:'/mvs',
      component:Mvs
    }
]


const router = new VueRouter({
    routes,
    mode:'history'
})


export default router
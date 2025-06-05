import { createRouter, createWebHistory } from 'vue-router'
import Signup from '@/share/Auth/Signup.vue'
import Login from '@/share/Auth/Login.vue'
import Homepage from '@/views/Home/Homepage.vue'
const routes = [
    {path:'/',component:Homepage},
    {path:'/DangNhap',component:Login},
    {path:'/DangKy',component:Signup}
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
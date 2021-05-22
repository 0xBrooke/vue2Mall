import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('views/home/home');
const Cart = () => import('views/cart/cart');
const Category = () => import('views/category/category');
const My = () => import('views/my/my');
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/my',
    component: My
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

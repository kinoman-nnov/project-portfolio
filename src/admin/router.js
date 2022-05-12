import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import axios from "axios";

Vue.use(VueRouter);

import header from './components/header';
import about from './pages/about';
import works from './pages/works';
import reviews from './pages/reviews';
import login from './pages/login';

const routes = [
  {
    path: '/',
    components: {
      default: about,
      header: header
    }
  },
  {
    path: '/works',
    components: {
      default: works,
      header: header
    }
  },
  {
    path: '/reviews',
    components: {
      default: reviews,
      header: header
    }
  },
  {
    path: '/login',
    component: login,
    meta: {
      public: true
    }
  }
];

const router = new VueRouter({ routes });

const guard = axios.create({ // создал новый экземпляр axios, старый вызовет refreshToken
  baseURL: "https://webdev-api.loftschool.com"
});

router.beforeEach(async (to, from, next) => { // проверка залогиненного пользовотеля

  const isPublicRoute = to.matched.some(route => route.meta.public); // возвращает true если роут публичный  
  const isUserLoggedIn = store.getters["user/userIsLoggedIn"]; // возвращает true если пользователь залогинен

  // проверка то, что был ли пользователь в системе и его токен истек
  if (isPublicRoute === false && isUserLoggedIn === false) {

    // проверка токена на действительность
    const token = localStorage.getItem("token");
    guard.defaults.headers['Authorization'] = `Bearer ${token}`;

    try {
      // пробный запрос на user, который вызовет ошибку при отсутсвии токена
      const response = await guard.get("/user");
      store.dispatch("user/login", await response.data.user);

      next();
    } catch (error) {
      router.replace("/login");
      localStorage.removeItem("token");
    }
  } else {
    next();
  }
});

export default router;
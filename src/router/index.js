import Vue from 'vue';
import Router from 'vue-router';
import Salary from '@/components/Salary';
import Salarylist from '@/components/Salarylist';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: ' Salary ',
      component: Salary,
    }, {
      name: 'list',
      path: '/list/:id',
      component: Salarylist,
    },
  ],
});

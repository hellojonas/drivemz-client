import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '@/views/AppHome.vue';
import AppAbout from '@/views/AppAbout.vue';
import AppExams from '@/views/AppExams.vue';
import PraticeLaws from '@/views/PraticeLaws.vue';
import PraticeSigns from '@/views/PraticeSigns.vue';
import AppPratice from '@/views/AppPratice.vue';
import ExamSession from '@/views/ExamSession.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/inicio', alias: '/', component: AppHome },
    { path: '/exames', component: AppExams },
    { path: '/exam-session', component: ExamSession },
    {
      path: '/praticar',
      component: AppPratice,
      children: [
        { path: 'sinais', component: PraticeLaws },
        { path: 'leis', component: PraticeSigns },
      ],
    },
    { path: '/sobre', component: AppAbout },
  ],
});

export default router;

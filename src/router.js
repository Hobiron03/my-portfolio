import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');
const Work = () => import('./views/Work.vue');
const Contact = () => import('./views/Contact.vue');

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {path: '/', component: Home},
        {path: '/About', component: About},
        {path: '/Work', component: Work},
        {path: '/Contact', component: Contact},
        {path: '/*', redirect: '/'},
    ],
})
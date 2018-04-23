import HomePage from 'page/HomePage';
import About from 'page/About';
import Contact from 'page/Contact';
import Category from 'page/Category';
import Post from 'page/Post';
import RoutePaths from 'data/enum/RoutePaths';
import RouteNames from 'data/enum/RouteNames';

export default [
  {
    path: RoutePaths.HOME,
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: RoutePaths.ABOUT,
    component: About,
    name: RouteNames.ABOUT,
  },
  {
    path: RoutePaths.CONTACT,
    component: Contact,
    name: RouteNames.CONTACT,
  },
  {
    path: RoutePaths.CATEGORY,
    component: Category,
    name: RouteNames.CATEGORY,
  },
  {
    path: RoutePaths.POST,
    component: Post,
    name: RouteNames.POST,
  },
];

import type {RouteItem} from "./type";
import About from "../../posts/About/About";
import Home from "../../posts/Home/Home";
import AppURL from "./AppURL";
import Feature from "../../posts/Feature/Feature";
import Register from "../../posts/Register/Register";

export const PostRoutes: Array<RouteItem> = [
    {
        path: AppURL.home(),
        title: 'Home',
        exact: true,
        content: Home,
    },
    {
        path: '/about/',
        title: 'About',
        content: About,
    },
    {
        path: '/feature/',
        title: 'Feature',
        content: Feature,
    },
    {
        path: '/register/',
        title: 'Register',
        content: Register,
    },
];


export const AppRoutes: Array<RouteItem> = [
    ...PostRoutes
];

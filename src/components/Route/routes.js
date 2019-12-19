import type {RouteItem} from "./type";
import About from "../../posts/About/About";
import Home from "../../posts/Home/Home";
import AppURL from "./AppURL";

export const PostRoutes: Array<RouteItem> = [
    {
        path: AppURL.home(),
        title: 'Home',
        content: Home,
    },
    {
        path: '/about/',
        title: 'About',
        content: About,
    }
];


export const AppRoutes: Array<RouteItem> = [
    ...PostRoutes,
];

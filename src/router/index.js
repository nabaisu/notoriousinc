import Notorious4 from '../pages/Notorious4'
import NotFound from '../pages/elements/404'

export const routes = [
    {
        path:'/',
        name: 'Notorious4',
        component: Notorious4
    },
    {
        path:'*',
        name: 'NotFound',
        component: NotFound
    },
];
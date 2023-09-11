
import { RouteObject, redirect } from 'react-router-dom'
import MainLayOut from '../layout/MainLayOut';
import mainLayOut from './mainLayOutPath';
import FirstLayOut from '../layout/FirstLayOut';
import firstLayOutPath from './firstLayOutPath';
import { authentication } from '../api/auhentication';
const { getUserProfile } = authentication()
const route: RouteObject[] = [
    {
        path: "/welcome",
        element: <FirstLayOut />,
        loader: async () => {
            const token = localStorage.getItem('token')
            if (token) {
                return redirect('/')
            }
            return token;
        },
        children: [...firstLayOutPath]
    },
    {
        path: "/",
        loader: async () => {
            const token = localStorage.getItem('token')
            if (!token) {
                return redirect('/welcome')
            }
            return await getUserProfile();
        },
        element: <MainLayOut />,
        children: [...mainLayOut],
    },
]

export default route;
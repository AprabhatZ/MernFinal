import {createBrowserRouter} from 'react-router-dom';

import Login from 'login/views/Index';
import Sign from 'singup/views/Index';
import Table from 'book/components/table/Table';

import Layout from 'Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path:"login",
                element: <Login/>,
            },
            {
                path:"signin",
                element: <Sign/>,
            },
            {
                path: "books",
                element: <Table/>,
            },
        ],
    }
]);

export default router;

import {createBrowserRouter} from 'react-router-dom';

import Login from 'login/views/Index';
import Sign from 'singup/views/Index';
import Table from 'book/components/table/Table';

import Layout from 'Layout';
import Card from 'book/components/card/Card';
import StoreBook from 'book/views/StoreBook';

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
                path:"/",
                element:<Card/>
            },
            {
                path:"signin",
                element: <Sign/>,
            },
            {
                path: "books",
                element: <Table/>,
            },
            {
                path: "books/store",
                element: <StoreBook/>,
            },
        ],
    }
]);

export default router;

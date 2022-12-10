import {createBrowserRouter} from 'react-router-dom';
import Protected from 'auth/Protected';
import Login from 'login/views/Index';
import Sign from 'singup/views/Index';

import Layout from 'Layout';
import Card from 'book/components/card/Card';
import StoreBook from 'book/views/StoreBook';
import BookIndex from 'book/views/BookIndex';
import UserIndex from 'user/views';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                element:<Protected/>,
                children:[
                    {
                        path: "books",
                        element: <BookIndex/>,
                    },
                    {
                        path: "books/store",
                        element: <StoreBook/>,
                    },
                    {
                        path: "user",
                        element: <UserIndex/>,
                    },

                ]
            },
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

        ]
      
    },

]);

export default router;

// path: '/',
// element: <Layout/>,

// children:[
//     {
//         path:"login",
//         element: <Login/>,
//     },
//     {
//         path:"/",
//         element:<Card/>
//     },
//     {
//         path:"signin",
//         element: <Sign/>,
//     },
//     {
//         path: "books",
//         element: <BookIndex/>,
//     },
//     {
//         path: "books/store",
//         element: <StoreBook/>,
//     },
//     {
//         path: "user",
//         element: <UserIndex/>,
//     },
// ],
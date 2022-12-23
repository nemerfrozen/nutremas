import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


//components
import Home from './page/Home';
import Page2 from './page/Page2';
import Page3 from './page/Page3';

import Header from './components/Header';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/page2',
        element: <Page2 />,
    },
    {
        path: '/page3',
        element: <Page3 />,
    }
]);

const App = () => {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>

    )
}

export default App;

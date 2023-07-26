import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navigation from './Navigation';
import Services from './Services'
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';

const App = () => {
    return (
        <>
            <div className='appComponent'>
                <Link to="/">
                    <h1>Mayur's Blog</h1>
                </Link>
                <Navigation />
            </div>
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/services",
                element: <Services />,
            }
        ]
    },
    // {
    //     path: "/about",
    //     element: <About/>,  
    // },
    // {
    //     path: "/contact",
    //     element: <Contact/>,  
    // },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


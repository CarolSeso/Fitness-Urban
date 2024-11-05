import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login.jsx";
import SignUp from "./views/SignUp.jsx";
import Home from "./views/Home.jsx";
import Workout from "./views/Workout.jsx";
import Missing from "./views/Missing.jsx";
import LDefault from "./components/layouts/LDefault.jsx";
import About from "./views/About.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LDefault />, // Main layout for all routes
        children: [
            {
                path: '/',
                element: <Navigate to="/home" />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/workout',
                element: <Workout />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    },
    {
        path: '*',
        element: <Missing />
    },
]);

export default router;

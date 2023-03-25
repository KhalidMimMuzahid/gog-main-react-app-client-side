import { createBrowserRouter } from "react-router-dom";
import Apply from "../components/shared/apply/Apply";
import NotFoundPage from "../components/shared/notFoundPage/NotFoundPage";
import SignUp from "../components/shared/signUp/SignUp";
import Main from "../layout/main/Main";
import About from "../pages/About/About";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/apply',
                element: <Apply/>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])
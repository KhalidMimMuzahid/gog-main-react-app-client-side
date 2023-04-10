import { createBrowserRouter } from "react-router-dom";
import Apply from "../components/shared/apply/Apply";
import Login from "../components/shared/login/Login";
import NotFoundPage from "../components/shared/notFoundPage/NotFoundPage";
import SignUp from "../components/shared/signUp/SignUp";
import Main from "../layout/main/Main";
import About from "../pages/About/About";
import ArtificialIntelligence from "../pages/Artificial-Intelligence/ArtificialIntelligence";
import Conditons from "../pages/Conditons/Conditons";
import Courses from "../pages/Courses/Courses";
import Cyber from "../pages/Cyber-Security/Cyber";
import DataVisualization from "../pages/Data-Visualization/DataVisualization";
import DSA from "../pages/DSA/DSA";
import Hire from "../pages/Hire/Hire";
import Home from "../pages/home/Home";
import Java from "../pages/Java/Java";
import MachineLearning from "../pages/Machine-Learning/MachineLearning";
import Privacy from "../pages/Privacy/Privacy";
import Python from "../pages/Python/Python";
import SQL from "../pages/SQL/SQL";
import ForgetPassword from "../components/shared/forgotPassword/ForgetPassword";
import SetPass from "../components/shared/forgotPassword/SetPass";
import AdmissionForm from "../pages/AdmissionForm/AdmissionForm";
import Pay from "../pages/Pay/Pay";
import PrivateRoute from "./PrivateRoute";
import Admin from "../pages/Admin/Admin";
import AdminRoute from "./AdminRoute";
import PhoneSignUp from "../components/shared/phoneSignUp/PhoneSignUp";
import AutoNameFill from "../components/shared/autoNameFill/AutoNameFill";


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
                path: '/signup/phone-sign-up',
                element: <PhoneSignUp/>
            },
            {
                path: '/login/phone-sign-up',
                element: <PhoneSignUp/>
            },
            {
                path: '/signup/auto-name-fill',
                element: <AutoNameFill/>
            },
            {
                path: '/forget-pass',
                element: <ForgetPassword/>
            },
            {
                path: '/set-pass',
                element: <SetPass/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/apply',
                element: <Apply/>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/hire',
                element: <Hire></Hire>
            },
            {
                path: '/privacy',
                element: <Privacy></Privacy>
            },
            {
                path: '/conditon',
                element: <Conditons></Conditons>
            },
            {
                path: '/admissionForm',
                element: <PrivateRoute><AdmissionForm></AdmissionForm></PrivateRoute> 
            },
            
            {
                path: '/pay',
                element: <Pay></Pay>
            },
            {
                path: '/admin',
                element:<AdminRoute><Admin></Admin></AdminRoute> 
            },
            
            
            
            {
                path: '/courses',
                element: <Courses></Courses>,
                children:[
                    {
                        path: '/courses/python',
                        element: <Python></Python>
                    },
                    {
                        path: '/courses/sql',
                        element: <SQL></SQL>
                    },
                    {
                        path: '/courses/java',
                        element: <Java></Java>
                    },
                    {
                        path: '/courses/dsa',
                        element: <DSA></DSA>
                    },
                    {
                        path: '/courses/cyber',
                        element: <Cyber></Cyber>
                    },
                    
                    {
                        path: '/courses/dataVisualization',
                        element: <DataVisualization></DataVisualization>
                    },
                    {
                        path: '/courses/machineLearning',
                        element: <MachineLearning></MachineLearning>
                    },
                    {
                        path: '/courses/ArtificialIntelligence',
                        element: <ArtificialIntelligence></ArtificialIntelligence>
                    },
                ]
            }
            
        ]
    },

])
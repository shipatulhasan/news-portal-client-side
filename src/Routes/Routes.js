import { createBrowserRouter } from "react-router-dom";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Main from "../layouts/Main";
import News from "../Pages/News/News";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Terms from "../Pages/Terms";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
               path:'/',
               element:<Home></Home>,
               loader:()=>fetch('http://localhost:5000/news')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category-news/${params.id}`)
          
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/registration',
                element:<Registration />
            },
            {
                path:'/terms',
                element:<Terms />
            },
            {
                path:'/profile',
                element:<Profile />
            }
            
            
        ]
    }
])
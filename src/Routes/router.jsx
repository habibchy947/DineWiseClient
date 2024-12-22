import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Gallery from "../Pages/Gallery/Gallery";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/all-foods',
                element:<AllFoods></AllFoods>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            }
        ]
    }
])

export default router;
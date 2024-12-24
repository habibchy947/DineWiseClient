import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";

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
                path:'/foodDetails/:id',
                element:<FoodDetails></FoodDetails>,
                loader:({params})=> fetch(`http://localhost:5000/food-details/${params.id}`)
            },
            {
                path:'/add-food',
                element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;
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
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";
import MyFoods from "../Pages/MyFoods/MyFoods";
import MyOrders from "../Pages/MyOrders/MyOrders";

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
                loader:({params})=> fetch(`https://dine-wise-server-pi.vercel.app/food-details/${params.id}`)
            },
            {
                path:'/foodPurchase/:id',
                element:<PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
                loader:({params})=> fetch(`https://dine-wise-server-pi.vercel.app/food-details/${params.id}`)

            },
            {
                path:'/add-food',
                element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path:'/my-foods',
                element:<PrivateRoute><MyFoods></MyFoods></PrivateRoute>
            },
            {
                path:'/my-orders',
                element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>,
                loader:()=>fetch('/gallery.json')
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
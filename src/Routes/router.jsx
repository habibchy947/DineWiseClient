import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement:<ErrorPage/>
    }
])

export default router;
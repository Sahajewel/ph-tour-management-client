import App from "@/App";
import { RegisterForm } from "@/components/modules/authentication/RegisterForm";
import About from "@/pages/About";
import Home from "@/pages/Home";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children:[
            {
                Component: Home,
                index: true
            },
            {
                Component: About,
                path: "about"
            },
           
        ]
    },
    {
        Component: LoginPage,
        path: "login"
    },
     {
                Component: RegisterPage,
                path: "register"
            },

])
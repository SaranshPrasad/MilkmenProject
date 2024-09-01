import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Milkmen from "./Components/Milkmen";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import VendorSignUp from "./Components/VendorSignUp";
import VendorPage from "./Components/VendorPage";
import AdminDashboard from "./Components/AdminDashboard";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"
import VendorLogin from "./Components/VendorLogin";
import VendorDashboard from "./Components/VendorDashboard";
import ContactUs from "./Components/ContactUs";
const AppLayout = () => {
   
    return (
        <Provider store={appStore}>
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
        </Provider>

    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/milkmen",
                element: <Milkmen />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/vendorsignup",
                element: <VendorSignUp />
            },{
                path:"/vendors",
                element:<VendorPage/>
            },
            
            {
                
                    path:"/admin",
                    element:<AdminDashboard/>
                
                
            },{
                path:"/vendor_login",
                element:<VendorLogin/>

            },{
                path:"/vendor/dashboard",
                element:<VendorDashboard/>
            },{
                path:"/vendor/:vendorId",
                element:<VendorPage/>
            },{
                path:"/contact",
                element:<ContactUs/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

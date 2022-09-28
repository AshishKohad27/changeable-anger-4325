import {Routes,Route} from "react-router-dom";
import AllProduct from "../Pages/AllProduct";
import ContactSale from "../Pages/ContactSales";
import FormData from "../Pages/FormData";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import PageNotFound from "../Pages/PageNotFound";
import Signup from "../Pages/Signup";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/singup" element={<Signup/>}/>
            <Route path="/contactsale" element={<ContactSale/>}/>
            <Route path="/allproduct" element={<AllProduct/>}/> 
            <Route path="/form" element={<FormData/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}
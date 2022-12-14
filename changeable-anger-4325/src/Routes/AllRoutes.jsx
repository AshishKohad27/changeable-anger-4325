import { Routes, Route } from "react-router-dom";
import AllProduct from "../Pages/AllProduct";
import ContactSale from "../Pages/ContactSales";
import FormData from "../Pages/FormData";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import PageNotFound from "../Pages/PageNotFound";
import Signup from "../Pages/Signup";
import Footer from "../Components/Footer";
import SingleProduct from "../Pages/SingleProduct";
import PluralsightNavbar from "../Components/PluralsightNvabar";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/contactsale"
        element={
          <PrivateRoute>
            <ContactSale />
          </PrivateRoute>
        }
      />
      <Route
        path="/allproduct"
        element={
          <PrivateRoute>
            <AllProduct />
          </PrivateRoute>
        }
      />
      <Route path="/footer" element={<Footer />} />
      <Route
        path="/courses/:data_id"
        element={
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        }
      />
      <Route path="/form" element={<FormData />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/pluralsightnavbar" element={<PluralsightNavbar />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

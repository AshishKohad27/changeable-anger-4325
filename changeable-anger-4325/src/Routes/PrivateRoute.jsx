import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

export default function PrivateRoute({ children }) {

    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        console.log("PrivatesRoutes:", isAuth);
        return <Navigate to="/signin" />;
    }
    return children
}
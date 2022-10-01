import { Children, createContext, useState } from "react";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [isUsers, setIsUsers] = useState({
        byUserName: "",
        byPassWord: "",
    })

    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }
    console.log('isAuth:', isAuth)

    return (
        <AuthContext.Provider value={{ isAuth, toggleAuth, isUsers }}>
            {children}
        </AuthContext.Provider>
    )
}
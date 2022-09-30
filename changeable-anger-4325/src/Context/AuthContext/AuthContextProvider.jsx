import { Children, createContext, useState } from "react";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }

    return (
        <AuthContext.Provider value={{ isAuth, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
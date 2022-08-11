import { UserContext } from "./UserContext"
import { useState } from "react";

export const UserProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [hasName, setHasName] = useState(false);
    const [hasDate, setHasDate] = useState(false);
    const [hasContact, setHasContact] = useState(false);
    const [hasComplete, setHasComplete] = useState(false);
    const [style, setStyle] = useState('bar');
    const [userName, setUserName] = useState({
        nombre: '',
        segNombre: '',
        apellidoP: '',
        apellidoM: ''
    });
    const [date, setDate] = useState({
        dia: '',
        mes: '',
        anio: ''
    });
    const [contact, setContact] = useState({
        tel: '',
        email: ''
    });
    return (
        <UserContext.Provider value={{
            hasName,
            setHasName,
            hasDate,
            setHasDate,
            hasContact,
            setHasContact,
            userName,
            setUserName,
            date,
            setDate,
            contact,
            setContact,
            hasComplete,
            setHasComplete,
            style,
            setStyle,
            isLogin,
            setIsLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}

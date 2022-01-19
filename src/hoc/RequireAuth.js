import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from '../hooks/useAuth'

const RequireAuth = ({children}) => {
    const location = useLocation(); //тут можу побачити стан, де я знаходжуся
    const {user} = useAuth;

    // const user = null; - - юзер залогінений
    // const user = true; - юзер залогінений
    if (!user) {
        return <Navigate to={'/login'} state={location}/> //як стейт передати по роуту той стан в компонент логін
    }
    //якщо юзер залогінений тоя хочу передати children, обгорненого компонентом RequireAuth

    return children
};

export default RequireAuth;
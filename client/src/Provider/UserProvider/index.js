import React, { useState, useContext } from 'react'

const UserContext = React.createContext({ user: null });

const UserProvider = props => {
    const [user, setUser] = useState(null)

    const setToken = (token) => {
        localStorage.setItem('token', token);
    }
    const getToken = () => {
        return localStorage.getItem('token');
    }

    const isLogedin = () => {
        return user !== null;
    }

    const isAdmin = () => {
        return isLogedin() && user.admin;
    }

    return <UserContext.Provider
        value={{
            User: user,
            setUser: setUser,
            setToken: setToken,
            getToken: getToken,
            isLogedin: isLogedin,
            isAdmin: isAdmin
        }}
        {...props}
    />
};

export default UserProvider;
export const useUser = () => useContext(UserContext);
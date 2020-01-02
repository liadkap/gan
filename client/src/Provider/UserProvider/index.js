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

    return <UserContext.Provider
        value={{
            User: user,
            setUser: setUser,
            setToken: setToken,
            getToken: getToken
        }}
        {...props}
    />
};

export default UserProvider;
export const useUser = () => useContext(UserContext);
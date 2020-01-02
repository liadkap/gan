import React from 'react'
import UserProvider from './UserProvider'

export default ({ children }) =>
    <UserProvider>
        {children}
    </UserProvider>
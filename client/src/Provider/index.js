import React from 'react'
import DrawerProvider from './DrawerStateProvider'
import UserProvider from './UserProvider'

export default ({ children }) =>
    <UserProvider>
        <DrawerProvider>
            {children}
        </DrawerProvider>
    </UserProvider>
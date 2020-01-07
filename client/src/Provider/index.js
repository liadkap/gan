import React from 'react'
import UserProvider from './UserProvider'
import ThemeProvider from './ThemeProvider'

export default ({ children }) =>
    <ThemeProvider>
        <UserProvider>
            {children}
        </UserProvider>
    </ThemeProvider>
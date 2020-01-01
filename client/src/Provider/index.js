import React from 'react'
import DrawerProvider from './DrawerStateProvider'

export default ({ children }) =>
    <DrawerProvider>
        {children}
    </DrawerProvider>
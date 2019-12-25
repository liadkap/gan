import React, { useState, useContext } from 'react'

const DrawerStateContext = React.createContext({ isOpened: false });

const DrawerStateProvider = props => {
    const [isOpened, setIsOpened] = useState(null);

    const toggleDrawerState = () => {
        setIsOpened(!isOpened);
    }

    return <DrawerStateContext.Provider
        value={{
            toggleDrawer: toggleDrawerState,
            state: isOpened
        }}
        {...props}
    />
};

export default DrawerStateProvider;
export const useDrawer = () => useContext(DrawerStateContext);
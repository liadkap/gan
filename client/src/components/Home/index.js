import React from 'react'
import { Box } from '@material-ui/core'
import Drawer from './components/Drawer'
import { useDrawer } from '../../Provider/DrawerStateProvider'

export default () => {
    const drawer = useDrawer();

    return (
        <Box display={'flex'} height={'100%'} width={'100%'} flexDirection={'row'}>
            hiiiiiiii
            <Drawer open={drawer.state} onClose={drawer.toggleDrawer}></Drawer>
        </Box>
    )
}
import React from 'react'
import { Drawer } from '@material-ui/core';
import DrawerContent from './components/DrawerContent'

export default ({ open, onClose }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            {<DrawerContent onClose={onClose}></DrawerContent>}
        </Drawer>
    );
}
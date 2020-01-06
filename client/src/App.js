import React from 'react'
import Navbar from './components/Navbar'
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import Providers from './Provider'
import { Box } from '@material-ui/core';
import Routes from './Routes'
import './index.css'

export default () => {
    const history = createBrowserHistory();
    
    return (
        <Router history={history}>
            <Box display={'flex'} width={'100%'} height={'100%'} flexDirection={'column'}>
                <Providers>
                    <Navbar />
                    <Routes/>
                </Providers>
            </Box >
        </Router >
    );
}
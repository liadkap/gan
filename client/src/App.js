import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import DrawerStateProvider from './Provider/DrawerStateProvider'
import { Box } from '@material-ui/core';
import './index.css'

export default () => {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Box display={'flex'} width={'100%'} height={'100%'} flexDirection={'column'}>
                <DrawerStateProvider>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </DrawerStateProvider>
            </Box >
        </Router >
    );
}
import React from 'react'
import Navbar from './components/Navbar'
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import Providers from './Provider'
import { Box } from '@material-ui/core';
import Routes from './Routes'
import './index.css'

export default () => {
    const history = createBrowserHistory();
    const routes = [...Routes]
    
    return (
        <Router history={history}>
            <Box display={'flex'} width={'100%'} height={'100%'} flexDirection={'column'}>
                <Providers>
                    <Navbar />
                    <Switch>
                        {routes.map(({ exact, name, path, component: Component }) => {return <Route exact key={name} path={path} render={() => (<Component />)}></Route> })}
                    </Switch>
                </Providers>
            </Box >
        </Router >
    );
}
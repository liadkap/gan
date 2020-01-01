import React from 'react'
import { Switch, Route } from "react-router";
import Routes from './components/Routes'

const routes = [...Routes]

export default () =>
    <Switch>
        {Routes.map(({ name, path, component: Component }) => { return <Route exact key={name} path={path} render={() => (<Component />)}></Route> })}
    </Switch>
import React from 'react'
import { Switch } from "react-router";
import { Redirect, Route } from 'react-router-dom'
import PublicRoutes from './components/PublicRoute'
import PrivateRoutes from './components/PrivateRoute'
import AdminRoutes from './components/AdminRoute'
import { useUser } from '../Provider/UserProvider'

const publicRoutes = [...PublicRoutes]
const privateRoutes = [...PrivateRoutes]
const adminRoutes = [...AdminRoutes]

export default () => {
    const { isLogedin, isAdmin } = useUser();

    return (
        <Switch>
            {publicRoutes.map(({ name, path, component: Component }) => { return <Route exact key={name} path={path} render={() => (<Component />)}></Route> })}
            {privateRoutes.map(({ name, path, component: Component }) => { return <Route exact key={name} path={path} render={() => isLogedin() ? (<Component />) : (<Redirect to="/login" />)}></Route> })}
            {adminRoutes.map(({ name, path, component: Component }) => { return <Route exact key={name} path={path} render={() => isAdmin() ? (<Component />) : (<Redirect to="/login" />)}></Route> })}
        </Switch>);
}
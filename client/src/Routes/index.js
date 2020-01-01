import React from 'react'
import Home from '../components/Home'
import Login from '../components/Login'

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
]

export default routes;
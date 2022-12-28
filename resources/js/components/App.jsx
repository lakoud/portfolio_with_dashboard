import React from 'react'
import Router from '../router/Router'
import { Login } from './Login/Login'
import { Navbard } from './navbard/navbard'

const App = () => {
    return (
        <div>
            {/* <Login/> */}
            <Navbard/>
            < Router/>
        </div>
    )
}

export default App
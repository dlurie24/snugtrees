import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home/Home.js'
import Music from './pages/music/Music.js'

export default () => {


    return (
    <>
        <Router>
            <Switch>
                <Route exact path="/">
                    
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/music">
                    <Music />
                </Route>
            </Switch>
        </Router>
    </>
    )
}
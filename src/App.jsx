import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Amis from "./composants/Amis"
import Home from "./composants/Home"
import Employes from "./composants/Employes"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/amis" component={Amis} />
                <Route path="/employes" component={Employes} />
            </Switch>
        </Router>
       
    )
}

export default App
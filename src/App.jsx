import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Join} exact={true} />
                <Route path="/chat" component={Chat} exact={true} />


            </Switch>
        </Router>
    )
}

export default App

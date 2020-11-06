import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { LoginCallback } from './LoginCallback';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/oauth_callback" component={LoginCallback} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default App;

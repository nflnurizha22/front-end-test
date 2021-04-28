/* eslint-disable react/jsx-props-no-spreading */
import React, {Suspense} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import {Loading} from 'components/atoms';
import {AppRoutes} from 'config/routes';

function App() {

    return (
        <Router>
            <Suspense fallback={<Loading loading/>}>
                <Switch>
                    {AppRoutes.map((route) => {
                        const {component: Component, id, path, exact} = route;
                        return (
                            <Route
                                key={id}
                                path={path}
                                exact={exact}
                                render={(props) => <Component {...props} />
                                }
                            />
                        );
                    })}
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;

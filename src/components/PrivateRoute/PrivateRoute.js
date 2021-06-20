import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { state } = useContext(GlobalContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (state.loggedInUser.email) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
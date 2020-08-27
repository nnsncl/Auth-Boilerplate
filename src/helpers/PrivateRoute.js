import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../auth/Auth';

export default function PrivateRoute({ component: RouteComponent, ...restProps }) {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...restProps}
            render={routeProps =>
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                        <Redirect to={'/signin'} />
                    )
            }
        />
    );
};

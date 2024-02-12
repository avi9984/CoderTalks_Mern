import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isAuth = false;

const GuestRoute = ({ children, ...rest }) => {
    return (
        <>
            <Route {...rest} render={({ location }) => {
                return (
                    isAuth ? (
                        <Navigate to={{ pathname: '/rooms', state: { from: location } }} />
                    ) : (
                        children // Render children directly here
                    )
                );
            }} />
        </>
    );
};

export default GuestRoute;

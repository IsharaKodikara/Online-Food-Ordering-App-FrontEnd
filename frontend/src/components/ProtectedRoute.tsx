import React from "react";

import { Navigate } from "react-router-dom";

interface Props {

    children: React.ReactNode;

    role?: string;
}

function ProtectedRoute({
    children,
    role
}: Props): React.JSX.Element {

    const token = localStorage.getItem("token");

    const userRole = localStorage.getItem("role");

    if (!token) {

        return <Navigate to="/login" />;
    }

    if (role && userRole !== role) {

        return <Navigate to="/home" />;
    }

    return <>{children}</>;
}

export default ProtectedRoute;
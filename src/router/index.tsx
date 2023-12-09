import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "@/pages/home/index.tsx";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
];

const Routes: React.FC = () => {
    const routeElements = useRoutes(routes);

    return <>{routeElements}</>;
};

export default Routes;

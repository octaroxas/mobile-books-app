import React, { Fragment, useContext, useEffect } from "react";
import AuthStack from "./authStack.routes";
import AppStack from "./app.stack.routes";

import { AuthContext } from "../contexts/AuthContext";
export default function ApplicationRoutes() {


    useEffect(() => {

    }, [])
    const { authenticated } = useContext(AuthContext)

    return authenticated ? <AppStack /> : <AuthStack />

}
import React from "react";
import { Route, Routes } from "react-router-dom";
import Adduser from "./Adduser";
import Home from "./Home";
import Edit from "./Edit";
import Delete from "./Delete";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Demo from "./Demo";
import Subuser from "./Subuser";

const Routing = () => {
    return (

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/adduser" element={<Adduser />} />
            <Route exact path="/edit/:userID" element={<Edit />} />
            <Route exact path="/delete/:userID" element={<Delete />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/demo" element={<Demo />} />
            <Route exact path="/subuser/:userID" element={<Subuser />} />
            <Route exact path="/dashboard/:userID" element={<Dashboard />} />
        </Routes>

    );
}
export default Routing;
import React from 'react';

import { Routes, Route } from "react-router-dom";
import DestinationForm from "../Components/Forms"
import Dashboard from "../Components/Dashboard"
function AllRouters(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<DestinationForm/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>    
        </div>
    );
}

export default AllRouters;
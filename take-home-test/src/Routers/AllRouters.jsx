import React from 'react';

import { Routes, Route } from "react-router-dom";
import DestinationForm from "../Components/Forms"
function AllRouters(props) {
    return (
        <div>
            <Routes>
                <Route path="/form" element={<DestinationForm/>}/>
                
            </Routes>    
        </div>
    );
}

export default AllRouters;
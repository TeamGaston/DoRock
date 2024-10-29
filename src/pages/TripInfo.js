import React from "react";
import { useLocation } from "react-router-dom";


function TripInfo() {
    const location = useLocation();

    
    return (
        <>
            <h1>TripInfo</h1>
            {location.state.sigunguCode}
        </>
    )
}

export default TripInfo;
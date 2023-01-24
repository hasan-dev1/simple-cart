import React, { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
export const AllState = createContext()

const StateManagement = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [homeData, setHomeData] = useState()
    useEffect(()=>{
        setLoading(true)
        fetch(`cartdata.json`)
        .then(res => res.json())
        .then(data =>{
             setHomeData(data);
             setLoading(false)
        })

    },[])
    const stateInfo = {loading, homeData}
    return <AllState.Provider value={stateInfo}>{children}</AllState.Provider>;
};

export default StateManagement;
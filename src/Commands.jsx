import Navigation from './Navigation';
import React,{useEffect, useContext} from "react";
import { Ground } from './context';

const Commands=()=>{
    const useGroundContext = useContext(Ground)

useEffect(()=>{
    useGroundContext.fetchCall("comments")
    useGroundContext.setAdd("usgfhfthfgher")
},[])

    return(
        <>
        <Navigation/>
        <h1 className="center">commends</h1>
        <div className="main">
         {useGroundContext.center.map(item=>(
            <div className="sub">
                <h3>{item.id}</h3>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.body}</p>
                </div>
         ))}

        </div>

        </>
    )
}
export default Commands;
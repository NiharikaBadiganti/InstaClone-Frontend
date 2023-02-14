import React, { useEffect, useState } from "react";
import cam from './Images/camera.jpg';
import insta from './Images/insta.jpeg';
import { Link } from "react-router-dom";
import Card from "./Card";


export const ViewPost = () =>
{
    const[state , updateState] = useState([]);
    const[indicators, setIndicators] = useState(true)

    useEffect(()=>
    {
       fetch("")
            .then(res =>
                {
                    return res.json()
                })
            .then(data => 
                {
                    console.log(data);
                    updateState(data)
                })
                .catch(err=>{
                    console.log(err)
                    })

    },[indicators]);
    return(
        <div className="container-fluid" style={{padding: '5px'}}>
            <img src={insta} id="instaimage" alt="..."/>
            <b>Instaclone</b>
            <Link to='/newpost'><img src={cam} id="camImage" alt="..."/></Link>
            <hr></hr>
        
            <div>
                {state.map((element,i) =>
                {
                    return (<Card key={i} pass={element}/>)
                })}
            </div>
        </div>
        
        
    )
}

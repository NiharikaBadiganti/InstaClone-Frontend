import React, { useEffect, useState } from "react";
import cam from './Images/camera.jpg';
import insta from './Images/insta.jpeg';
import { Link } from "react-router-dom";
import Card from "./Card";
import { NewPost } from "./NewPost";
import { Route  } from "react-router-dom";

export const ViewPost = () =>
{
    const[state , updateState] = useState([]);
    const[Indicator, setIndicators] = useState(true)
    useEffect(()=>
    {
        fetch("https://instabackend-hfve.onrender.com/viewpost")
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
                

    },[Indicator]);
    return(
        <div className="container-fluid" style={{padding: '5px'}}>
            <img src={insta} id="instaimage" alt="..."/>
            <b>Instaclone</b>
            <Link to='/newpost'><img src={cam} id="camImage" alt="..."/></Link>
            <hr></hr>
        
                {state.map((element,i) =>
                {
                    return (<Card key={i} pass={element}/>)
                })}
            
            <Route path="/newpost" element={<NewPost setIndicators={setIndicators}/>}/>
        </div>
        
        
    )
}

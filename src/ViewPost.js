import React, { useEffect, useState } from "react";
import cam from './Images/camera.jpg';
import insta from './Images/insta.jpeg';
import { Link, Route,Routes } from "react-router-dom";
import Card from "./Card";
import NewPost from './NewPost';
import axios from 'axios';

export const ViewPost = () =>
{
    const[state , updateState] = useState([]);
    useEffect(()=>
    {
        function findData()
        {
        axios.get("https://instaclone-project-6pt0.onrender.com/postview")
            .then(res =>
                {
                    console.log(res)
                    updateState(res.data)
                })
        
                .catch(err=>{
                    console.log(err)
                    })
                
                }
        findData()       
    },[]);
    return(
        <div className="container-fluid" style={{padding: '5px'}}>
            <img src={insta} id="instaimage" alt="..."/>
            <b>Instaclone</b>
            <Link to='/newpost'><img src={cam} id="camImage" alt="..."/></Link>
            <hr></hr>

               { state.map((element , i)=>
                    {
                        return <Card pass = {element} key={i}/>
                    })}
                   
        </div>
        
        
    )
}

import React from "react";
import './Card.css';
import heart from './Images/like.png';
import send from './Images/send.png';

const Card = () => {
    return (
        <>

                <div className="card">
                    <div className="placeDiv">
                        
                    </div>
                    <div className="imageDiv">
                        <img src="..." className="card-img-top" alt="..."/>
                    </div>
                    <div className="descripDiv">
                        <img src={heart} id="likeImg"/>
                        <img src={send} id="sendImg"/>
                        <strong>Date Text</strong>
                        <p>
                            Description Data
                        </p>
                    </div>

                </div>
        </>
                        )
}

export default Card;
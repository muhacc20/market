import React from 'react'
import './App.css'
export default function Market(props) {
    return (
       
            <div className='basic'> <a href={props.link}>
                <img src={props.imgUrl} title={props.title} />
                <p className="col">{props.title} </p>
                <p>{props.price}</p>
    <p class="discount">{props.discout}</p>
                </a>


            </div>
       
    )
}
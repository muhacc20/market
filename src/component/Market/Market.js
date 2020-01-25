import React from 'react'
import './App.css'
export default function Market(props) {
    return (
       
            <div className='basic'>
                <img src={props.imgUrl} title={props.title} />
                <p className="col">{props.title} </p>
                <h2>{props.price}</h2>
                


            </div>
       
    )
}
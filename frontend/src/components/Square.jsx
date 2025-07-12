import React from 'react';
import './Square.css'
 const Square =(props)=>{
    return(
        <div onClick={props.onClick} 
            className="square">
            <h5
            className='Text-move'>{props.value}</h5>
        </div>
    )
 }

export default Square;
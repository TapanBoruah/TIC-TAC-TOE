import React from 'react';
 const Square =(props)=>{
    return(
        <div onClick={props.onClick} 
        style={{
            border:"3px solid blue",
            borderRadius:"5%",
            boxShadow:"inherit",
            height:"16vh",
            width:"8vw" , 
            display:"flex", 
            margin:"5px",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:'rgb(0, 183, 255)',
        }}
        className="square">
            <h5 style={{
                fontSize:"3.5vw",
                color:"white",
                fontWeight:"700",
            }}
            className='Text-move'>{props.value}</h5>
        </div>
    )
 }

export default Square;
import React from 'react';

function ShowDate(){
    const date= new Date()
    const hours=date.getHours()
    var message=""
    const style={
        color:"#333",
        backgroundColor:"#FF2D00",
        fontSize:"100px"
    }
    if(hours<12){
        message="Morning"
        style.color="green"
        
    }else if(hours>=12 && hours<17){
        message="Afternoon"
    }else{
        message="Night"
        style.color="#245"
    }
  
    return(
        <div>
            {/* <p>The date now is {date.getHours()} </p> */}
            <h1 style={style}>Good {message}</h1>
        </div>
    )
}
export default ShowDate
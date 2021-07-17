import React from 'react';

function Login (){
    const date = new Date()
    return(
        <div>
            <p>THE DATE IS {date.getDate()}-{date.getMinutes()}
            </p>
            </div>
    )
}
export default Login
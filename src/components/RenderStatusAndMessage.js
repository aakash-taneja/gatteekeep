import React from 'react'
import './RenderStatusAndMessage.css';
import RenderMessage from './rendermessage/RenderMessage';
import RenderStatus from './renderstatus/RenderStatus';
function RenderStatusAndMessage({id}) {
    return (
        <div id="container1">
            <div id="navbar">
                <p>LOGO</p>
            </div>
            <div id="container2">
                <RenderMessage id={id}/>
                <RenderStatus id={id}/>
            </div>
            
        </div>
    )
}

export default RenderStatusAndMessage

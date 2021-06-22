import React from 'react'
import './RenderStatusAndMessage.css';
import RenderMessage from './rendermessage/RenderMessage';
import RenderStatus from './renderstatus/RenderStatus';
function RenderStatusAndMessage({id}) {
    return (
        <div className="container1">
            <div className="navbar">
                <p>LOGO</p>
            </div>
            <div className="container2">
                <RenderMessage id={id}/>
                <RenderStatus id={id}/>
            </div>
            
        </div>
    )
}

export default RenderStatusAndMessage

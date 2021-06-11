import React from 'react'
import './RenderMessage.css';
import {MESSAGE} from '../../shared/Message'

function RenderMessage({id}) {
    return (
        <div id="subcontainer1">
            <h3>Notifications</h3>
            {
                MESSAGE.map((msg)=>{
                    if(msg.flatID===id&&msg.status==='pending'){
                        return(
                            <div>
                                <p>{msg.content}</p>
                                <button type="button">Allow</button>
                                <button type="button">Deny</button>
                            </div>
                        );
                    }
                })
            }
        </div>
    )
}

export default RenderMessage

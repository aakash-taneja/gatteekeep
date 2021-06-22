import React from 'react'
import {MESSAGE} from '../../shared/Message'
import '../rendermessage/RenderMessage.css'

function ShowMessage() {
    return (
        <div className="subcontainer1">
            <h3>Notifications</h3>
            {
                MESSAGE.map((msg)=>{
                    if(msg.status==='allowed' || msg.status==='denied'){
                        return(
                            <div className="message">
                                <p>{msg.content + " : "}<strong>{msg.status}</strong> </p>
                                
                            </div>
                        );
                    }
                })
            }
        </div>
    )
}

export default ShowMessage

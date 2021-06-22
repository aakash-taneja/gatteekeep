import React from 'react'
import {MESSAGE} from '../../shared/Message'
import './ShowMessage.css'

function ShowMessage() {
    return (
        <div id="gsubcontainer1">
            <h3>Notifications</h3>
            {
                MESSAGE.map((msg)=>{
                    if(msg.status==='allowed' || msg.status==='denied'){
                        return(
                            <div className="message">
                                <p>{msg.content + " : "+ msg.status} </p>
                                
                            </div>
                        );
                    }
                })
}
        </div>
    )
}

export default ShowMessage

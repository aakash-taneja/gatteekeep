import React, { Component } from 'react'
import './RenderMessage.css'
import { MESSAGE } from '../../shared/Message'

export class RenderMessage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: MESSAGE
                  
        }
    }
    changeStatusToAllowed(id) {
        this.setState(prevState => ({
            message: prevState.message.map((m) =>
                m.messageID===id ? {...m, status: "allowed"} : m
            )
        }), ()=>console.log(this.state));
    }
    changeStatusToDenied(id) {
        this.setState(prevState => ({
            message: prevState.message.map((m) =>
                m.messageID===id ? {...m, status: "denied"} : m
            )
        }), ()=>console.log(this.state));
    }
    
    render() {
        
        return (
            <div className="subcontainer1">
                <h3>Notifications</h3>
                {
                    this.state.message.map((msg)=>{
                        if(msg.flatID===this.props.id && msg.status==='pending'){
                            return(
                                <div className="message">
                                    <p>{msg.content+" "}</p>
                                    <button onClick={() => this.changeStatusToAllowed(msg.messageID)}>Allow</button>
                                    <button onClick={() => this.changeStatusToDenied(msg.messageID)}>Deny</button>
                                </div>
                            );
                        }
                    })
                }
            </div>
        )
    }
}

export default RenderMessage

// import React from 'react'
// import {MESSAGE} from '../../shared/Message'
import '../rendermessage/RenderMessage.css'



// export default ShowMessage
import Axios from'axios';
import React, { Component } from 'react'

 class ShowMessage extends Component {
     constructor(props)
     {
         super(props);
         this.state = {
            msg:[],
         };
     }
     getMsgs() {
        Axios
          .get("http://localhost:5000/guard/msg")
          .then(response =>
            response.data.map(msgs => ({
              messageID: `${msgs.messageID}`,
              flatID: `${msgs.flatID}`,
			content: `${msgs.content}`,
			status: `${msgs.status}` 
            }))
          )
          .then(msg => {
            this.setState({
              msg,        
            });
            console.log(this.state.msg)
          })          
      }
     componentDidMount() {
        this.getMsgs();
        }
       
       
    render() {
        const {msg}=this.state;        
        return (
            <div className="subcontainer1">
                <h3>Notifications</h3>
                {
                    msg.map((msgs)=>{
                        const {messageID,flatID,content}=msgs;
                        // if(msg.status==='allowed' || msg.status==='denied'){
                            return(
                                <div className="message">
                                    {/* <p>{msg.content + " : "}<strong>{msg.status}</strong> </p> */}
                                    Message id : {messageID}
                                    Flat id{flatID}
                                    content:{content}
                                    {console.log(msgs.msg)}
                                </div>
                            );
                        
                    })
                }
            </div>
        )
    }
}

export default ShowMessage


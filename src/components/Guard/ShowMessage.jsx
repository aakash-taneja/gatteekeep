// import React from 'react'
import {MESSAGE} from '../../shared/Message'
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
   
     componentDidMount() {
        console.log("before getting data from db ")
        Axios.get("http://localhost:5000/guard/msg")
            .then(response =>{

                console.log(response.data);
                let arr = response.data
                 this.setState({arr})
            }
            )
        console.log("after getting data from db ");
        console.log(this.data +"data after getting ");
        }
       
       
    render() {
        return (
            <div className="subcontainer1">
                <h3>Notifications</h3>
                {
                    MESSAGE.map((msg)=>{
                        if(msg.status==='allowed' || msg.status==='denied'){
                            return(
                                <div className="message">
                                    {/* <p>{msg.content + " : "}<strong>{msg.status}</strong> </p> */}
                                   {this.state.msg} 
                                </div>
                            );
                        }
                    })
                }
            </div>
        )
    }
}

export default ShowMessage


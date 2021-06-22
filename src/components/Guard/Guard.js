import React from 'react'
import ShowMessage from './ShowMessage'
import SendMessage from './SendMessage'
import '../RenderStatusAndMessage.css'

function Guard() {
    return (
        <div className="container1">
            <div className="navbar">
                <p>LOGO</p>
            </div>
            <div className="container2">
                <ShowMessage/>
                <SendMessage/>
                
            </div>
            
        </div>
       
    )
}
export default Guard

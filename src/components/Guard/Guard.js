import React from 'react'
import ShowMessage from './ShowMessage'
import SendMessage from './SendMessage'
import './Guard.css'

function Guard() {
    return (
        <div id="gcontainer1">
            <div id="gnavbar">
                <p>LOGO</p>
            </div>
            <div id="gcontainer2">
                <ShowMessage/>
                <SendMessage/>
                
            </div>
            
        </div>
       
    )
}
export default Guard

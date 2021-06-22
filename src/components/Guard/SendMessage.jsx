import React from 'react'
import './SendMessage.css'

function SendMessage() {
    return (
        <div id="gsubcontainer2">
            <label for="flatNo">Flat Number: </label>
            <input type="number" id="flatNo" name="flatNo"/>
            <br/><br/>
            <label for="message">Message: </label>
            <input type="text" id="message" name="message"/>
        </div>
    )
}

export default SendMessage

import React, { useState } from 'react'
import './RenderStatus.css'
import Axios from 'axios';

function RenderStatus() {

    const url = "/api";
    const [data, setdata] = useState({
        status: "",
        time: ""
    })

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setdata(newdata)
        console.log(newdata);

        e.preventDefault();
        Axios.post(url, {
            status: data.status,
            time: data.time
        })
            .then(res => {
                console.log(res.data)
            })
    }
    return (
        <div id="subcontainer2">
            <div>
                <h3>Status</h3>
                <p id="status">
                    <span>IN</span>
                    <label class="switch"><input type="checkbox" onChange={(e) => handle(e)} id="status" value={data.status} />
                        <div></div>
                    </label>
                    <span>OUT</span>
                </p>



            </div>
            <div>
                <p><h3>Will be back by: </h3><input type="time" onChange={(e) => handle(e)} id="time" value={data.time} /></p>
            </div>
        </div>
    )
}

export default RenderStatus
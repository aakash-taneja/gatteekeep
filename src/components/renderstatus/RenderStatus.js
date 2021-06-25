import React, { useState } from 'react'
import './RenderStatus.css'
import Axios from 'axios';

function RenderStatus() {

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
        console.log("changed");
        Axios.post("http://localhost:5000/api", {
            status: data.status,
            time: data.time
        }).catch(e=>{
            console.log(e);
          }).then(()=>{
            console.log("status updated done");
          })
    }
    return (
        <div className="subcontainer2">
            <div className="subsubcontainer1">
                <div>
                 <h3>Status</h3>
                </div>
                <div className="userip">
                 <p id="status">
                     <span>IN</span>
                     <label class="switch"><input type="checkbox" onChange={(e) => handle(e)} id="status" value={data.status} />
                        <div></div>
                     </label>
                     <span>OUT</span>
                 </p>
                </div>
            </div>
            <div className="subsubcontainer2">
                <div>
                <h3>Will be back by: </h3>
                </div>
                <div className="userip"><p><input type="time" onChange={(e) => handle(e)} id="time" value={data.time} /></p></div>
            
            </div>
        </div>
    )
}

export default RenderStatus
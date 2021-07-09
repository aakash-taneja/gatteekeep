import React, { useState } from 'react'
import './RenderStatus.css'
import Axios from 'axios';
import styled from "styled-components";
import { Marginer } from "../marginer";
const FormContainer = styled.form`
order:2; 
flex: 5;
`;

const SubmitButton = styled.button`
  width: 50%;
  padding: 11px 50px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #4E37B2;
  background: linear-gradient(
    58deg, 
    rgba(78,55,178,1) 20%, 
    rgba(81,23,194,1) 100%);
  &:hover {
    filter: brightness(1.03);
  }
`;
function RenderStatus() {

    const [data, setdata] = useState({
        status: "",
        time: ""
    })

    function handletime(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setdata(newdata)
        console.log(newdata);
    }
    function handlestatus(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.checked
        setdata(newdata)
        console.log(newdata);
    }
    function submit(e){
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
        <FormContainer onSubmit={(e)=>submit(e)} >
        <div className="subcontainer2">
            <div className="subsubcontainer1">
                <div>
                 <h3>Status</h3>
                </div>
                <div className="userip">
                 <p id="status">
                     <span>IN</span>
                     <label class="switch"><input type="checkbox" onChange={(e) => handlestatus(e)} id="status" value={data.status} />
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
                <div className="userip"><p><input type="time" onChange={(e) => handletime(e)} id="time" value={data.time} /></p></div>
            
            </div>
        </div>
        <Marginer direction="vertical" margin="2em" />
        <SubmitButton  onClick={submit} type="submit" id="submit">Send Message</SubmitButton>
        </FormContainer>
    )
}

export default RenderStatus
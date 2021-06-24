import React, { useState } from 'react'
import '../renderstatus/RenderStatus.css'
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

function SendMessage() {
    const [data,setdata]=useState({
        flatNo:"",
        message:""    
      })
      function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setdata(newdata)
        console.log(newdata);
      }
      function submit(e){
    
        e.preventDefault();
        console.log("clicked");
        Axios.post("http://localhost:5000/api",{
            flatNo:data.flatNo,
          message:data.message
        }).catch(e=>{
          console.log(e);
        })
        // .then(res=>{
        //     console.log(res.data)
        // })
        .then(()=>{
          console.log("message done");
        })
      }
    return (
        <FormContainer onSubmit={(e)=>submit(e)}>
            <label for="flatNo">Flat Number: </label>
            <input type="number" id="flatNo" name="flatNo" onChange={(e)=>handle(e)} />
            <br/><br/>
            <label for="message">Message: </label>
            <input type="text" id="message" name="message" onChange={(e)=>handle(e)} />
            <Marginer direction="vertical" margin="2em" />
            <SubmitButton  onClick={submit} type="submit">Send Message</SubmitButton>
        </FormContainer>
    )
}

export default SendMessage

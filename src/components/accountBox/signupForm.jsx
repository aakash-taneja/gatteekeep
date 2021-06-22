import React, { useContext,useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import Axios from'axios';

export function SignupForm(props) {
  const { switchToSignin,switchToGuardSignin } = useContext(AccountContext);

  const url="/api1";
  const [data,setdata]=useState({
    name:"",
    email:"",
    password:"" ,
    confPassword:""
  })

  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setdata(newdata)
    console.log(newdata);
  }
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      name:data.name,
      email:data.email,
      password:data.password,
      confPassword:data.confPassword
    })
    .then(res=>{
        console.log(res.data)
    })
  }
  return (
    <BoxContainer>
      <FormContainer onSubmit={(e)=>submit(e)}>
        <Input type="text" placeholder="Full Name" onChange={(e)=>handle(e)} id="fullName" value={data.fullName}/>
        <Input type="email" placeholder="Email" onChange={(e)=>handle(e)} id="email" value={data.email}/>
        <Input type="password" placeholder="Password" onChange={(e)=>handle(e)} id="password" value={data.password}/>
        <Input type="password" placeholder="Confirm Password" onChange={(e)=>handle(e)} id="confPassword" value={data.confPassword}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin={10} />

      {/* <Marginer direction="vertical" margin="1em" /> */}
      <MutedLink href="#">
        Are you Guard?
        <BoldLink href="#" onClick={switchToGuardSignin}>
          Signin Here
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin={10} />
    </BoxContainer>
  );
}

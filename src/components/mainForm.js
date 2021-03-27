
import React, { useState } from "react";

import StepCounter from "./steps";
import StepOne from "./first-step";
import StepTwo from "./second-step";
import StepThree from "./third-step";
import SubmittedForm from "./after-submit";

//set the initial state of form variables
const initialState = {
  firstName: "",
  lastName: "",
  wcolour: "",
  wsize: "",
  email: "",
  phone: ""
};

export default function MainForm () {
  
   // store initial state values of form variables
  const [state, setValueState] = useState(initialState); 
  
  //manages the step number in the multi-step form
  const [stepNumber, setStepNumber] = useState(1); 

  //set the success state after submit
  const [success, setSuccess] = useState(false); 
  
  //increase the step counter when going to the next page
  const next = () => setStepNumber(stepNumber => stepNumber + 1);

  //decrease the step counter when going back to the previous page
  const back = () => setStepNumber(stepNumber => stepNumber - 1); 

  //reset the initial state
  const reset = () => {
    setStepNumber(1);
    setSuccess(success => !success);
    setValueState(initialState);
  }

  //set success and the step number upon submit
  const onSubmit = () => {
    setSuccess(success => !success);
    setStepNumber(stepNumber => stepNumber + 1);
  }
  
  //store user input in the form variables
  const onChange = (event) => {
    const value = event.target.value;
    setValueState({
      ...state,
      [event.target.name]: value
    })
  };

 // console.log(state);

  //render the form according to the state using a switch
  const renderStepForm = (stepNumber, state) => {
    switch (stepNumber) {
      case 1:
        return (
          <StepOne 
          values = {state} 
          next = {next}
          onChange = {onChange}
          />
        );
      case 2:
        return (
          <StepTwo 
          values = {state} 
          next = {next}
          back = {back}
          onChange = {onChange}
          />
        );
      case 3:
        return (
          <StepThree
          values = {state} 
          back = {back}
          onSubmit = {onSubmit}
          onChange = {onChange}
          />
        );
      case 4: 
        return (<SubmittedForm success = {success} reset = {reset}/>)
      default:
        return (
          <StepOne 
          values = {state} 
          next = {next}
          onChange = {onChange}
          />
        );
    } //end switch
  };
  
  return (
    <div>
      <StepCounter step ={stepNumber}></StepCounter>
      <br></br>
      <hr></hr>
      <div className="formLayout">{renderStepForm(stepNumber, state)}</div>
      <br></br>
      <br></br>
      <hr></hr>
      {stepNumber !== 4 ? <label name="stepNumber" >Step {stepNumber} of 3 </label > : "" }
    </div>  
  )

};







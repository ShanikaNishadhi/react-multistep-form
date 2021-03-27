import React from 'react';
import "../index.css"

export default function StepCounter(props) {

  const {step} = props;

  let active = 'step-num active';
  let inactive = 'step-num inactive';
  
    return (
    <div>
    <div id="steps" className="steps">
      <span className={step  === 1 ? active : inactive}>1</span>
      <span className={step  === 2 ? active : inactive}>2</span>
      <span className={step  === 3 ? active : inactive}>3</span>
    </div>
    <div id="step-name">
      <label className="step-name">Step 1</label>
      <label className="step-name" >Step 2</label>
      <label className="step-name">Step 3</label>
    </div>
    </div>
  );

};

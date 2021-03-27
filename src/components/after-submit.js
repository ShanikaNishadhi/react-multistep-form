import React from "react"

export default function SubmittedForm(props) {
  const {success, reset} = props;
  return(
      <>
        <label name="success" >{success ? 'Success!!!' : 'Error!'} </label>
        <div>
        <button className="home" onClick={reset}> Home </button>
        </div>
    </>
  )
};
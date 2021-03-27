export default function StepOne (props) {
  return(
      <>
        <label name="firstName" >First Name </label >
          <input type="text" name="firstName" value={props.values.firstName} onChange={props.onChange}/>
        <br />
        <br />
        <label name="lastName">Last Name </label >
        <input type="text" name="lastName" value={props.values.lastName} onChange={props.onChange}/>
        <br></br>
        <br></br>
        <button className="next" onClick={props.next}>Next</button>
    </>
  )
};

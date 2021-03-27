export default function StepThree(props){
  return(
      <>
        <label name="email" >Email Address </label >
        <input type="email" name="email" value={props.values.email}  onChange={props.onChange}/>
        <br />
        <br />
        <label name="phone">Phone No &nbsp; &nbsp; &nbsp; &nbsp;</label >
        <input type="text" name="phone" value={props.values.phone}  onChange={props.onChange}/>
        <br />
        <br />
        <button className="back" onClick={props.back}>back</button> 
        <button className="next" onClick={props.onSubmit}>submit</button>
    </>
  )
};

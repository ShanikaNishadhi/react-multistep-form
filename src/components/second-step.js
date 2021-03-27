export default function StepTwo(props) {
  return(
      <>
        <label name="wcolour" >Widget Colour</label >
        <input type="text" name="wcolour" value={props.values.wcolour} onChange={props.onChange} />   
        <br />
        <br />
        <label name="wsize">Widget Size  &nbsp; </label >
        <input type="text" name="wsize" value={props.values.wsize}  onChange={props.onChange}/>
        <br></br>
        <br></br>
        <button className="back" onClick={props.back}>back</button> 
        <button className="next" onClick={props.next}>Next</button>
    </>
  )
};
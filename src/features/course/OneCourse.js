import { useState } from "react";
import EditCourse from "./EditCourse";
import { removeFromArr } from "./courseSlice";
import { useDispatch } from "react-redux";
  const OneCourse = ({ one }) => {
    let [ShowEditForm,setEditForm]=useState(null)
    const dispatch=useDispatch();
        return (<div style={{border:"1px black solid" }}>
          <h1>{one.name}</h1>
          <h1>{one.price}</h1>
      <h1>{one.numLessons}</h1>
    <input type="button" onClick={()=>dispatch(removeFromArr(one._id))} value={"delete Me"}/>
        <input type="button" onClick={()=>{setEditForm(true)}} value={"edit Me"}/>
{ShowEditForm&&<EditCourse one={one}/>}
    </div>); }
    export default OneCourse;
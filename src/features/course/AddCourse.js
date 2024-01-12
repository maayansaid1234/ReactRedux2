import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToArr } from "./courseSlice";

const AddCourse  = () => {
const dispatch=useDispatch();
const {register,handleSubmit}=useForm();

function save(data){
  
dispatch(addToArr(data))
}
    return ( <form onSubmit={handleSubmit(save)}>
        <h1>add a new course to add</h1>
        <label>name</label>
<input {...register("name")}   />
<label>price</label>
<input  {...register("price")}   />
<label>numLessons </label>
<input  {...register("numLessons")}   />
<input type="submit"  />


    </form> );
}
 
export default AddCourse ;
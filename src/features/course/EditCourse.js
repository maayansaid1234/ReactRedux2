import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updateArr } from "./courseSlice";

const EditCourse = ({one}) => {
   const dispatch=useDispatch();
    const {register,handleSubmit} = useForm({
        defaultValues: one
    })
    
    function save(data){
    dispatch(updateArr(data))
    }
        return ( <form onSubmit={handleSubmit(save)}>
            <h3>Edit me</h3>
            <label>name</label>
    <input {...register("name")}   />
    <label>price</label>
    <input  {...register("price")}   />
    <label>numLessons </label>
    <input  {...register("numLessons")}   />
    <input type="submit"  />
    
    
        </form> );
    
}
 
export default EditCourse;

import OneCourse from './OneCourse';
import { useSelector } from 'react-redux';



const CourseList = () => {
   

let arr=useSelector(state => state.course.arr);
return (<ul>
 {arr.map(item => { return <li key={item._id}><OneCourse
one={item}/> </li>; })}
</ul>);
}
export default CourseList;
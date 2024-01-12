import logo from './logo.svg';
import './App.css';
import CourseList from './features/course/CourseList';
import AddCourse from './features/course/AddCourse';
import { useEffect , useState} from 'react';
import { useSelector } from 'react-redux';
function App() {
  
  return (
    <>
    
   
    <CourseList/> 
    <AddCourse  />
    </>
  );
}

export default App;





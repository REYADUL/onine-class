import React from 'react';
import course from '../Course/Course.css';

const Course = (props) => {
    // console.log(props);
   
    return (
        <div className="flex">
           <div className='content'>
            <h1>course name:{props.course.course}</h1>
            <br/>
            <p>course price:${props.course.price}</p>
            <img src="" alt=""/>
            <button className='button'
             onClick={() =>props.handleAddCourse(props.course)}>buy courses</button>
        </div>
        </div>
        
    );
};

export default Course;
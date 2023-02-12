import Angular from './images/angular.jpg';
import Bootstrap from'./images/bootstrap5.png';
import Ccsharp from'./images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';
import './course.css';
import React from 'react';

const courseMap= {

Angular,
Bootstrap,
Ccsharp,
Kompleweb,

}




function  Course({courseName}) {
console.log(Angular);
console.log(courseName);
console.log(courseMap[courseName]);



    return  ( <div>
<img className='course' src={courseMap[courseName]} alt="..." />


    </div> );
}

 export default Course;



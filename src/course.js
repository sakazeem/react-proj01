import React from 'react';

//Print Name With Plain Function

function Course({CourseName, AssignNumber}){
  return <div>
        <h4 courseName="heading">{CourseName}</h4>
        <p>{AssignNumber}</p>
    </div>;
}
export default Course
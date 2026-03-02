import React from 'react'
import Course from './Course/Course'

const Courses = (props) => {
  let CoursesElements = props.CoursesPage.CoursesData.map(course=><Course name={course.name} themes={course.themes} points={course.points} img={course.img} />)
  return (
    <div>
      {CoursesElements}
    </div>
  )
}

export default Courses

import React from 'react';
import ul from './style.css';

const Course = ({courses}) => {
    return(
      <div>
        <HeaderTop />
        <HeaderExFirstPart courses={courses} />
        <Content1 courses={courses} />
        <Total1 courses={courses} />
  
        <HeaderExSecondPart courses={courses} />
        <Content2 courses={courses} />
        <Total2 courses={courses} />
      </div>
    )
  }
  
  const HeaderTop = () => {
    return (
    <h1>Web Development Curriculum</h1>
    )
  }
  
  const HeaderExFirstPart = ({courses}) => {
    return(
    <h2>{courses[0].name}</h2>
    )
  }
  
  const HeaderExSecondPart = ({courses}) => {
    return(
    <h2>{courses[1].name}</h2>
    )
  }
  
  const Content1 = ({courses}) => {
    return(
      <ul>
        {courses[0].parts.map(note => <li key={note.id}>{note.name} {note.exercises}</li>)}
      </ul>
    )}
  
  const Content2 = ({courses}) => {
    return (
      <ul>
        {courses[1].parts.map(element => <li key={element.id}>{element.name} {element.exercises}</li>)}
      </ul>
    )}
  
  const Total1 = ({ courses }) => {
    const exercisesArray = [];
    for(let i=0; i<courses[0].parts.length; i++) exercisesArray.push(courses[0].parts[i].exercises)
    const sum = exercisesArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    return(
      <h3>total of {sum} exercises</h3>
    ) 
  }
  
  const Total2 = ({ courses }) => {
    const exercisesArray = [];
    for(let i=0; i<courses[1].parts.length; i++) exercisesArray.push(courses[1].parts[i].exercises)
    const sum = exercisesArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    return(
      <h3>total of {sum} exercises</h3>
    ) 
  }

  export default Course;
// const Header = (props) => {
//   console.log('props from Header: ',props);
//   return(
//     <h1>{props.course}</h1>
//   );
// }
// const Content = ({partsandexercises}) => {
//   return(
//     <div>
//         <Part part = {partsandexercises[0].part} exercise = {partsandexercises[0].exercise} />
//         <Part part = {partsandexercises[1].part} exercise = {partsandexercises[1].exercise} />
//         <Part part = {partsandexercises[2].part} exercise = {partsandexercises[2].exercise} />
//     </div>
//   );
// }
// const Part = (props) => {
//   console.log('props from Part: ',props);
//   return(
//     <p>
//       {props.part} : {props.exercise}
//     </p>
//   );
// }
// const Total = ({partsandexercises}) => {
//   return(
//     <p>
//       Number of exercises : { partsandexercises[0].exercise + 
//                               partsandexercises[1].exercise + 
//                               partsandexercises[2].exercise }
//     </p>
//   );
// }
// const App = () => {
//   const course = 'Half Stack application development';
//   const partsandexercises = [
//     {part: 'Fundamentals of React', exercise:10},
//     {part: 'Using props to pass data', exercise:7},
//     {part: 'State of a component', exercise:14}
//   ]
//   return (
//     <div>
//       <Header course={course} />
//       <Content partsandexercises={partsandexercises} />
//       <Total partsandexercises={partsandexercises} />
//     </div>
//   );
// }

// export default App;

const Header = ({course}) => {
  console.log('props from Header: ',course);
  return(
    <h1>{course}</h1>
  );
}

const Content = ({parts}) => {
  console.log('props from Content: ',parts);
  return(
    <div>
        <Part part = {parts[0].name} exercise = {parts[0].exercises} />
        <Part part = {parts[1].name} exercise = {parts[1].exercises} />
        <Part part = {parts[2].name} exercise = {parts[2].exercises} />
    </div>
  );
}

const Part = (props) => {
  return(
    <p>
      {props.part} : {props.exercise}
    </p>
  );
}

const Total = ({parts}) => {
  console.log('props from Total: ',parts);
  return(
    <p>
      Number of exercises : { parts[0].exercises + 
                              parts[1].exercises + 
                              parts[2].exercises }
    </p>
  );
}

const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  }
  return(
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  );
}

export default App
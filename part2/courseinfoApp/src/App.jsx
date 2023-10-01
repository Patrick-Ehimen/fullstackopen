import Course from "./components/Course";
import Total from "./components/Total";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Course course={course} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   );
// };

// const Part = (props) => {
//   return (
//     <p>
//       {props.parts} {props.exercises}
//     </p>
//   );
// };

// const Content = (props) => {
//   return (
//     <div>
//       <Part parts={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part parts={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part parts={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </div>
//   );
// };

// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   );
// };

export default App;

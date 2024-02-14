import React from "react";

let guest = 0;
// const Cup = () => {
//   guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>;
// };
// const PureComponents = () => {
//   // React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs
//   return (
//     <>
//       <Cup />
//       <Cup />
//       <Cup />
//     </>
//   );
// };

//  The above code is bad practice
//  Just pass the changing variable i.e. guest as a prop to the Cup component
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

const PureComponents = () => {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
};

// purity hudahudai kei changes lyaunu paryo vane like updating the screen, starting an animation, changing the data—are called side effects.

// for a component to be pure, two criterion to be met
// 1. It must always return the same JSX given the same inputs
// 2. It must not have side effects i.e. it should not changeany objects or variables that existed before rendering (outside the component.)

export default PureComponents;

// https://react.dev/learn/keeping-components-pure

// CHALLENGE-1
// export default function Clock({ time }) {
//   let hours = time.getHours();
//   let className;
//   if (hours >= 0 && hours <= 6) {
//     className = 'night';
//   } else {
//     className = 'day';
//   }
//   return (
//     <h1 id="time">
//       {time.toLocaleTimeString()}
//     </h1>
//   );
// }


// CHALLENGE-2
// import Panel from './Panel.js';
// import { getImageUrl } from './utils.js';



// export default function Profile({ person }) {
//   // currentPerson = person;
//   return (
//     <Panel>
//       <Header person = {person}/>
//       <Avatar person = {person}/>
//     </Panel>
//   )
// }

// function Header({person}) {
//   return <h1>{person.name}</h1>;
// }

// function Avatar({person}) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={50}
//       height={50}
//     />
//   );
// }

// CHALLENGE-3
// export default function StoryTray({ stories }) {
//   storiesClone = JSON.parse(JSON.stringify(storiesClone))
//   return (
//     <ul>
//       {storiesClone.map(story => (
//         <li key={story.id}>
//           {story.label}
//         </li>
//       ))}
//       <li>Create Story</li>
//     </ul>
//   );
// }

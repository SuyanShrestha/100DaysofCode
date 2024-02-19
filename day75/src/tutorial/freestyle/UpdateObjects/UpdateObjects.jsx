import React from "react";
import { useState } from "react";

const UpdateObjects = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          left: position.x - 10,
          top: position.y - 10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
};

export default UpdateObjects;

// import { useState } from 'react';

// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com'
//   });

//   function handleFirstNameChange(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.value
//     });
//   }

//   function handleLastNameChange(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value
//     });
//   }

//   function handleEmailChange(e) {
//     setPerson({
//       ...person,
//       email: e.target.value
//     });
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           value={person.firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={person.lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={person.email}
//           onChange={handleEmailChange}
//         />
//       </label>
//       <p>
//         {person.firstName}{' '}
//         {person.lastName}{' '}
//         ({person.email})
//       </p>
//     </>
//   );
// }

// bettersolution is :
// import { useState } from 'react';

// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com'
//   });

//   function handleChange(e) {
//     setPerson({
//       ...person,
//       [e.target.name]: e.target.value
//     });
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           name="firstName"
//           value={person.firstName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           name="lastName"
//           value={person.lastName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           name="email"
//           value={person.email}
//           onChange={handleChange}
//         />
//       </label>
//       <p>
//         {person.firstName}{' '}
//         {person.lastName}{' '}
//         ({person.email})
//       </p>
//     </>
//   );
// }

// using IMMER
// npm install use-immer
// import { useImmer } from 'use-immer';

// export default function Form() {
//   const [person, updatePerson] = useImmer({
//     name: 'Niki de Saint Phalle',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Hamburg',
//       image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//     }
//   });

//   function handleNameChange(e) {
//     updatePerson(draft => {
//       draft.name = e.target.value;
//     });
//   }

//   function handleArtworkChange(e) {
//     updatePerson(draft => {
//       draft.artwork.name = e.target.value;
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input
//           value={person.name}
//           onChange={handleNameChange}
//         />
//       </label>
//       <label>
//         Title:
//         <input
//           value={person.artwork.title}
//           onChange={handleArtworkChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           value={person.artwork.city}
//           onChange={handleArtworkChange}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           value={person.artwork.image}
//           onChange={handleArtworkChange}
//         />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {' by '}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img
//         src={person.artwork.image}
//         alt={person.artwork.title}
//       />
//     </>
//   );
// }

// https://react.dev/learn/updating-objects-in-state
    // CHALLENGE-1

    // import { useState } from 'react';

    // export default function Scoreboard() {
    //   const [player, setPlayer] = useState({
    //     firstName: 'Ranjani',
    //     lastName: 'Shettar',
    //     score: 10,
    //   });

    //   function handlePlusClick() {
    //     setPlayer({
    //       ...player,
    //       score: player.score + 1,
    //     })
    //   }

    //   function handleFirstNameChange(e) {
    //     setPlayer({
    //       ...player,
    //       firstName: e.target.value,
    //     });
    //   }

    //   function handleLastNameChange(e) {
    //     setPlayer({
    //       ...player,
    //       lastName: e.target.value
    //     });
    //   }

    //   return (
    //     <>
    //       <label>
    //         Score: <b>{player.score}</b>
    //         {' '}
    //         <button onClick={handlePlusClick}>
    //           +1
    //         </button>
    //       </label>
    //       <label>
    //         First name:
    //         <input
    //           value={player.firstName}
    //           onChange={handleFirstNameChange}
    //         />
    //       </label>
    //       <label>
    //         Last name:
    //         <input
    //           value={player.lastName}
    //           onChange={handleLastNameChange}
    //         />
    //       </label>
    //     </>
    //   );
    // }


// CHALLENGE-2
    // import { useState } from 'react';
    // import Background from './Background.js';
    // import Box from './Box.js';

    // const initialPosition = {
    //   x: 0,
    //   y: 0
    // };

    // export default function Canvas() {
    //   const [shape, setShape] = useState({
    //     color: 'orange',
    //     position: initialPosition
    //   });

    //   function handleMove(dx, dy) {
    //     setShape({
    //       ...shape,
    //       position: {
    //         ...shape.position,
    //         x: shape.position.x + dx,
    //         y: shape.position.y + dy,
    //       }
    //     })

    //   }

    //   function handleColorChange(e) {
    //     setShape({
    //       ...shape,
    //       color: e.target.value
    //     });
    //   }

    //   return (
    //     <>
    //       <select
    //         value={shape.color}
    //         onChange={handleColorChange}
    //       >
    //         <option value="orange">orange</option>
    //         <option value="lightpink">lightpink</option>
    //         <option value="aliceblue">aliceblue</option>
    //       </select>
    //       <Background
    //         position={initialPosition}
    //       />
    //       <Box
    //         color={shape.color}
    //         position={shape.position}
    //         onMove={handleMove}
    //       >
    //         Drag me!
    //       </Box>
    //     </>
    //   );
    // }


// CHALLENGE-3
    // import { useState } from 'react';
    // import { useImmer } from 'use-immer';
    // import Background from './Background.js';
    // import Box from './Box.js';

    // const initialPosition = {
    //   x: 0,
    //   y: 0
    // };

    // export default function Canvas() {
    //   const [shape, setShape] = useImmer({
    //     color: 'orange',
    //     position: initialPosition
    //   });

    //   function handleMove(dx, dy) {
    //     updateShape(draft => {
    //       draft.position.x += dx;
    //       draft.position.y += dy;
    //     })
        
    //   }

    //   function handleColorChange(e) {
    //     updateShape(draft => {
    //       draft.color = e.target.value;
    //     });
    //   }

    //   return (
    //     <>
    //       <select
    //         value={shape.color}
    //         onChange={handleColorChange}
    //       >
    //         <option value="orange">orange</option>
    //         <option value="lightpink">lightpink</option>
    //         <option value="aliceblue">aliceblue</option>
    //       </select>
    //       <Background
    //         position={initialPosition}
    //       />
    //       <Box
    //         color={shape.color}
    //         position={shape.position}
    //         onMove={handleMove}
    //       >
    //         Drag me!
    //       </Box>
    //     </>
    //   );
    // }

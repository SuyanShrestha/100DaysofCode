import React, { useState } from "react";

const State = () => {
  const users = [
    { name: "Suyan", age: 50, hobbies: ["Reading", "Sleeping", "Music"] },
    { name: "Shristi", age: 51, hobbies: ["Reading", "Cooking", "Coding"] },
    { name: "Kriti", age: 52, hobbies: ["Writing", "Studying", "Gaming"] },
    { name: "Joey", age: 53, hobbies: ["Sketching", "Coding", "Eating"] },
  ];

  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNext = () => {
    if (index < users.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  let person = users[index];

  const hobbyList = person.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>);
  return (
    <div>
      <h2>{person.name}</h2>
      <h4>Age: {person.age}</h4>
      <p>
        This is person number : {index + 1} out of {users.length}
      </p>
      <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
        <button className="btn" onClick={handleNext}>
          Next
        </button>
        <button className="btn" onClick={handleShowMore}>
          {showMore ? "Hide" : "Show"} Hobbies
        </button>
      </div>
      {showMore && (
        <div style={{ marginTop: "2rem" }}>
          <h5>Hobbies of {person.name} are listed below:</h5>
          <ul>{hobbyList}</ul>
        </div>
      )}
    </div>
  );
};

export default State;

// https://react.dev/learn/state-a-components-memory

//  CHALLENGE-1
// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     if(index < sculptureList.length - 1){
//       setIndex(index + 1);
//     }
//     else{
//       setIndex(index)
//     }
//   }

//   function handlePrevClick(){
//     if(index > 0){
//       setIndex(index - 1)
//     }
//     else{
//       setIndex(index)
//     }
//   }
//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <div style={{display: 'flex', gap: '1rem'}}>
//         <button onClick={handleNextClick}>
//           Next
//         </button>
//         <button onClick = {handlePrevClick}>
//           Prev
//         </button>
//       </div>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// CHALLENGE-2
    // import { useState } from 'react';
    // export default function Form() {
    //   let [firstName, setFirstName] = useState('');
    //   let [lastName, setLastName] = useState('');

    //   function handleFirstNameChange(e) {
    //      setFirstName(e.target.value);
    //   }

    //   function handleLastNameChange(e) {
    //     setLastName(e.target.value);
    //   }

    //   function handleReset() {
    //      setFirstName('');
    //      setLastName('');
    //   }

    //   return (
    //     <form onSubmit={e => e.preventDefault()}>
    //       <input
    //         placeholder="First name"
    //         value={firstName}
    //         onChange={handleFirstNameChange}
    //       />
    //       <input
    //         placeholder="Last name"
    //         value={lastName}
    //         onChange={handleLastNameChange}
    //       />
    //       <h1>Hi, {firstName} {lastName}</h1>
    //       <button onClick={handleReset}>Reset</button>
    //     </form>
    //   );
    // }

// CHALLENGE-3
    // import { useState } from 'react';

    // export default function FeedbackForm() {
    //   const [isSent, setIsSent] = useState(false);
    //   const [message, setMessage] = useState('');

    //   if (isSent) {
    //     return <h1>Thank you!</h1>;
    //   } else {
    //     // eslint-disable-next-line
    //     return (
    //       <form onSubmit={e => {
    //         e.preventDefault();
    //         alert(`Sending: "${message}"`);
    //         setIsSent(true);
    //       }}>
    //         <textarea
    //           placeholder="Message"
    //           value={message}
    //           onChange={e => setMessage(e.target.value)}
    //         />
    //         <br />
    //         <button type="submit">Send</button>
    //       </form>
    //     );
    //   }
    // }


// CHALLENGE-4
    // A state variable is only necessary to keep information between re-renders of a component. Within a single event handler, a regular variable will do fine.
    // import { useState } from 'react';

    // export default function FeedbackForm() {
    //   let name;

    //   function handleClick() {
    //     name = prompt('What is your name?');
    //     alert(`Hello, ${name}!`);
    //   }

    //   return (
    //     <button onClick={handleClick}>
    //       Greet
    //     </button>
    //   );
    // }




// checkbox handa show garni, natra chahi hide garni code
// aba yeta checkbox le hide garyo vaney agadi change garya tyo ko internal state haru ko value chahi reset
// when React removes a component, it destroys its state. React preserves a component’s state for as long as it’s being rendered at its position in the UI tree. If it gets removed, or a different component gets rendered at the same position, React discards its state

// import { useState } from "react";

// export default function App() {
//   const [showB, setShowB] = useState(true);
//   return (
//     <div>
//       <Counter />
//       {showB && <Counter />}
//       <label>
//         <input
//           type="checkbox"
//           checked={showB}
//           onChange={(e) => {
//             setShowB(e.target.checked);
//           }}
//         />
//         Render the second counter
//       </label>
//     </div>
//   );
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = "counter";
//   if (hover) {
//     className += " hover";
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>Add one</button>
//     </div>
//   );
// }

// {
//   isFancy ? <Counter key={1} isFancy={true} /> : <Counter isFancy={false} />;
// }

// https://react.dev/learn/preserving-and-resetting-state

// CHALLENGE-1
// import { useState } from "react";

// export default function App() {
//   const [showHint, setShowHint] = useState(false);
//   return (
//     <div>
//       {showHint && (
//         <p>
//           <i>Hint: Your favorite city?</i>
//         </p>
//       )}
//       <Form />
//       {showHint ? (
//         <button
//           onClick={() => {
//             setShowHint(false);
//           }}
//         >
//           Hide hint
//         </button>
//       ) : (
//         <button
//           onClick={() => {
//             setShowHint(true);
//           }}
//         >
//           Show hint
//         </button>
//       )}
//     </div>
//   );
// }

// function Form() {
//   const [text, setText] = useState("");
//   return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
// }

// CHALLENGE-2
// import { useState } from "react";

// export default function App() {
//   const [reverse, setReverse] = useState(false);
//   let checkbox = (
//     <label>
//       <input
//         type="checkbox"
//         checked={reverse}
//         onChange={(e) => setReverse(e.target.checked)}
//       />
//       Reverse order
//     </label>
//   );
//   if (reverse) {
//     return (
//       <>
//         <Field key="lastname" label="Last name" />
//         <Field key="firstname" label="First name" />
//         {checkbox}
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Field key="firstname" label="First name" />
//         <Field key="lastname" label="Last name" />
//         {checkbox}
//       </>
//     );
//   }
// }

// function Field({ label }) {
//   const [text, setText] = useState("");
//   return (
//     <label>
//       {label}:{" "}
//       <input
//         type="text"
//         value={text}
//         placeholder={label}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </label>
//   );
// }

//--------------------------------------------------------------------------------------

// CHALLENGE-3
// import { useState } from "react";
// import ContactList from "./ContactList.js";
// import EditContact from "./EditContact.js";

// export default function ContactManager() {
//   const [contacts, setContacts] = useState(initialContacts);
//   const [selectedId, setSelectedId] = useState(0);
//   const selectedContact = contacts.find((c) => c.id === selectedId);

//   function handleSave(updatedData) {
//     const nextContacts = contacts.map((c) => {
//       if (c.id === updatedData.id) {
//         return updatedData;
//       } else {
//         return c;
//       }
//     });
//     setContacts(nextContacts);
//   }

//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedId={selectedId}
//         onSelect={(id) => setSelectedId(id)}
//       />
//       <hr />
//       <EditContact
//         initialData={selectedContact}
//         onSave={handleSave}
//         key={selectedId}
//       />
//     </div>
//   );
// }

// const initialContacts = [
//   { id: 0, name: "Taylor", email: "taylor@mail.com" },
//   { id: 1, name: "Alice", email: "alice@mail.com" },
//   { id: 2, name: "Bob", email: "bob@mail.com" },
// ];

// --------------------------------------------------------------------------------------

// CHALLENGE-4
// import { useState } from "react";

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const hasNext = index < images.length - 1;

//   function handleClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     } else {
//       setIndex(0);
//     }
//   }

//   let image = images[index];
//   return (
//     <>
//       <button onClick={handleClick}>Next</button>
//       <h3>
//         Image {index + 1} of {images.length}
//       </h3>
//       <img key={index + 1} src={image.src} />
//       <p>{image.place}</p>
//     </>
//   );
// }

// let images = [
//   {
//     place: "Penang, Malaysia",
//     src: "https://i.imgur.com/FJeJR8M.jpg",
//   },
//   {
//     place: "Lisbon, Portugal",
//     src: "https://i.imgur.com/dB2LRbj.jpg",
//   },
//   {
//     place: "Bilbao, Spain",
//     src: "https://i.imgur.com/z08o2TS.jpg",
//   },
//   {
//     place: "Valparaíso, Chile",
//     src: "https://i.imgur.com/Y3utgTi.jpg",
//   },
//   {
//     place: "Schwyz, Switzerland",
//     src: "https://i.imgur.com/JBbMpWY.jpg",
//   },
//   {
//     place: "Prague, Czechia",
//     src: "https://i.imgur.com/QwUKKmF.jpg",
//   },
//   {
//     place: "Ljubljana, Slovenia",
//     src: "https://i.imgur.com/3aIiwfm.jpg",
//   },
// ];

// --------------------------------------------------------------------------------------
// CHALLENGE-5
// import { useState } from "react";
// import Contact from "./Contact.js";

// export default function ContactList() {
//   const [reverse, setReverse] = useState(false);

//   const displayedContacts = [...contacts];
//   if (reverse) {
//     displayedContacts.reverse();
//   }

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           value={reverse}
//           onChange={(e) => {
//             setReverse(e.target.checked);
//           }}
//         />{" "}
//         Show in reverse order
//       </label>
//       <ul>
//         {displayedContacts.map((contact) => (
//           <li key={contact.id}>
//             <Contact contact={contact} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// const contacts = [
//   { id: 0, name: "Alice", email: "alice@mail.com" },
//   { id: 1, name: "Bob", email: "bob@mail.com" },
//   { id: 2, name: "Taylor", email: "taylor@mail.com" },
// ];

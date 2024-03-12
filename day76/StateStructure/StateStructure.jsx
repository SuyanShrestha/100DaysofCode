// https://react.dev/learn/choosing-the-state-structure
// CHALLENGE-1
// import { useState } from "react";

// export default function Clock(props) {
// return <h1 style={{ color: props.color }}>
// {props.time}
// </h1>;
// }

// method-2

// import { useState } from "react";

// export default function Clock({ color, time }) {
//   return <h1 style={{ color: color }}>{time}</h1>;
// }

// CHALLENGE-2
    // import { useState } from "react";
    // import AddItem from "./AddItem.js";
    // import PackingList from "./PackingList.js";

    // let nextId = 3;
    // const initialItems = [
    //   { id: 0, title: "Warm socks", packed: true },
    //   { id: 1, title: "Travel journal", packed: false },
    //   { id: 2, title: "Watercolors", packed: false },
    // ];

    // export default function TravelPlan() {
    //   const [items, setItems] = useState(initialItems);
    //   const total = items.length;
    //   const packed = items.filter((item) => item.packed).length;

    //   function handleAddItem(title) {
    //     setItems([
    //       ...items,
    //       {
    //         id: nextId++,
    //         title: title,
    //         packed: false,
    //       },
    //     ]);
    //   }

    //   function handleChangeItem(nextItem) {
    //     setItems(
    //       items.map((item) => {
    //         if (item.id === nextItem.id) {
    //           return nextItem;
    //         } else {
    //           return item;
    //         }
    //       })
    //     );
    //   }

    //   function handleDeleteItem(itemId) {
    //     setItems(items.filter((item) => item.id !== itemId));
    //   }

    //   return (
    //     <>
    //       <AddItem onAddItem={handleAddItem} />
    //       <PackingList
    //         items={items}
    //         onChangeItem={handleChangeItem}
    //         onDeleteItem={handleDeleteItem}
    //       />
    //       <hr />
    //       <b>
    //         {packed} out of {total} packed!
    //       </b>
    //     </>
    //   );
    // }

// CHALLENGE-3
    // import { useState } from "react";
    // import { initialLetters } from "./data.js";
    // import Letter from "./Letter.js";

    // export default function MailClient() {
    // const [letters, setLetters] = useState(initialLetters);
    // const [highlightedId, setHighlightedId] = useState(null);

    // function handleHover(letter) {
    //     setHighlightedId(letter.id);
    // }

    // function handleStar(starred) {
    //     setLetters(
    //     letters.map((letter) => {
    //         if (letter.id === starred.id) {
    //         return {
    //             ...letter,
    //             isStarred: !letter.isStarred,
    //         };
    //         } else {
    //         return letter;
    //         }
    //     })
    //     );
    // }

    // return (
    //     <>
    //     <h2>Inbox</h2>
    //     <ul>
    //         {letters.map((letter) => (
    //         <Letter
    //             key={letter.id}
    //             letter={letter}
    //             isHighlighted={letter.id === highlightedId}
    //             onHover={handleHover}
    //             onToggleStar={handleStar}
    //         />
    //         ))}
    //     </ul>
    //     </>
    // );
    // }

// CHALLENGE-4
    // import { useState } from "react";
    // import { letters } from "./data.js";
    // import Letter from "./Letter.js";

    // export default function MailClient() {
    //   const [selectedId, setSelectedId] = useState([]);

    //   // TODO: allow multiple selection
    //   const selectedCount = selectedId.count;

    //   function handleToggle(toggleId) {
    //     if (selectedId.includes(toggleId)) {
    //       setSelectedId(selectedId.filter((id) => id !== toggleId));
    //     } else {
    //       setSelectedId([...selectedId, toggleId]);
    //     }
    //   }

    //   return (
    //     <>
    //       <h2>Inbox</h2>
    //       <ul>
    //         {letters.map((letter) => (
    //           <Letter
    //             key={letter.id}
    //             letter={letter}
    //             isSelected={selectedId.includes(letter.id)}
    //             onToggle={handleToggle}
    //           />
    //         ))}
    //         <hr />
    //         <p>
    //           <b>You selected {selectedCount} letters</b>
    //         </p>
    //       </ul>
    //     </>
    //   );
    // }

// import { useState } from "react";

// export default function Accordion() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       <h2>Almaty, Kazakhstan</h2>
//       <Panel
//         title="About"
//         isActive={activeIndex === 0}
//         onShow={() => setActiveIndex(0)}
//         onHide={() => setActiveIndex(null)}
//       >
//         With a population of about 2 million, Almaty is Kazakhstan's largest
//         city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel
//         title="Etymology"
//         isActive={activeIndex === 1}
//         onShow={() => setActiveIndex(1)}
//         onHide={() => setActiveIndex(null)}
//       >
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
//         "apple" and is often translated as "full of apples". In fact, the region
//         surrounding Almaty is thought to be the ancestral home of the apple, and
//         the wild <i lang="la">Malus sieversii</i> is considered a likely
//         candidate for the ancestor of the modern domestic apple.
//       </Panel>
//     </>
//   );
// }

// function Panel({ title, children, isActive, onShow, onHide }) {
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <>
//           <p>{children}</p>
//           <button onClick={onHide}>Hide</button>
//         </>
//       ) : (
//         <button onClick={onShow}>Show</button>
//       )}
//     </section>
//   );
// }

//  a component is “controlled” when the important information in it is driven by props rather than its own local state. This lets the parent component fully specify its behavior.
// Uncontrolled components are easier to use within their parents because they require less configuration. But they’re less flexible when you want to coordinate them together. Controlled components are maximally flexible, but they require the parent components to fully configure them with props.

// https://react.dev/learn/sharing-state-between-components

// CHALLENGE-1
    // import { useState } from "react";

    // export default function SyncedInputs() {
    //   const [text, setText] = useState("");

    //   function handleChange(e) {
    //     setText(e.target.value);
    //   }

    //   return (
    //     <>
    //       <Input label="First input" value={text} onChange={handleChange} />
    //       <Input label="Second input" value={text} onChange={handleChange} />
    //     </>
    //   );
    // }

    // function Input({ label, value, onChange }) {
    //   return (
    //     <label>
    //       {label} <input value={value} onChange={onChange} />
    //     </label>
    //   );
    // }

// CHALLENGE-2
    // import { useState } from "react";
    // import { foods, filterItems } from "./data.js";

    // export default function FilterableList() {
    // const [query, setQuery] = useState("");

    // function handleChange(e) {
    //     setQuery(e.target.value);
    // }

    // return (
    //     <>
    //     <SearchBar onChange={handleChange} query={query} />
    //     <hr />
    //     <List items={filterItems(foods, query)} />
    //     </>
    // );
    // }

    // function SearchBar({ query, onChange }) {
    // return (
    //     <label>
    //     Search: <input value={query} onChange={onChange} />
    //     </label>
    // );
    // }

    // function List({ items }) {
    // return (
    //     <table>
    //     <tbody>
    //         {items.map((food) => (
    //         <tr key={food.id}>
    //             <td>{food.name}</td>
    //             <td>{food.description}</td>
    //         </tr>
    //         ))}
    //     </tbody>
    //     </table>
    // );
    // }

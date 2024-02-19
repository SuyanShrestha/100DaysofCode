import { useState } from "react";

// https://react.dev/learn/state-as-a-snapshot
//  CHALLENGE-1
// export default function TrafficLight() {
//   const [walk, setWalk] = useState(true);

//   function handleClick() {
//     setWalk(!walk);
//     alert(walk ? "Stop is next" : "Walk is next");
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
//       <h1
//         style={{
//           color: walk ? "blue" : "darkred",
//         }}
//       >
//         {walk ? "Walk" : "Stop"}
//       </h1>
//     </>
//   );
// }

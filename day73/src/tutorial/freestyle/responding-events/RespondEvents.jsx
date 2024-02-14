import React from "react";
import "../../../index.css";

const PlayButton = ({ movie, children, onClick }) => {
  return (
    <div>
      <button className="btn" onClick={onClick}>Play</button>
      <h2>{movie}</h2>
      {children}
    </div>
  );
};

const changeBackground = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  let bodyStyle = document.body.style;
  bodyStyle.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

const RespondEvents = () => {
  return (
    <div>
      <PlayButton movie="Weathering with you" onClick = {changeBackground}>
        <div>
          <h4>Ggmokoloksy</h4>
          <p>Written by: Suyan Shrestha</p>
          <p>Director: Shristi Koju</p>
        </div>
      </PlayButton>
    </div>
  );
};

export default RespondEvents;

// https://react.dev/learn/responding-to-events

// CHALLENGE-1
// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={handleClick}>
//      // <button onClick={() => handleClick()}></button>
//       Toggle the lights
//     </button>
//   );
// }

// CHALLENGE-2
// export default function ColorSwitch({
//   onChangeColor
// }) {
//   return (
//     <button onClick={e => {
//       e.stopPropagation();
//       onChangeColor();
//     }}>
//       Change color
//     </button>
//   );
// }

import React, { useEffect, useState } from "react";

const ListRendering = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const URL = "https://jsonplaceholder.typicode.com/posts";
      const resp = await fetch(URL);
      const data = await resp.json();
      console.log(data);
      setPosts(data);
    }
    fetchData();
  }, []);

  // USING MAP
  const listItems = posts.map((post) => (
    <li key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </li>
  ));

  // USING FILTER TO ONLY FILTER OUT THOSE WITH USER ID = 1
  const listId1 = posts
    .filter((post) => post.userId === 1)
    .map((post) => (
      <li key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    ));

  //   console.log(data);
  return (
    <div>
      <ul>{listItems}</ul>
      {/* <ul>{listId1}</ul> */}
    </div>
  );
};

export default ListRendering;

// -----------------------------------------------------------------------------------------------------------
// CHALLENGES IN DOCS
// https://react.dev/learn/rendering-lists

// CHALLENGE-1
// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const listItems = people.filter(person =>
//     person.profession === 'chemist').map(person => (
//         <li key={person.id}>
//           <img
//             src={getImageUrl(person)}
//             alt={person.name}
//           />
//           <p>
//             <b>{person.name}:</b>
//             {' ' + person.profession + ' '}
//             known for {person.accomplishment}
//           </p>
//         </li>
//       )
//     );

//   const listItems2 = people.filter(person =>
//     person.profession !== 'chemist').map(person => (
//         <li key={person.id}>
//           <img
//             src={getImageUrl(person)}
//             alt={person.name}
//           />
//           <p>
//             <b>{person.name}:</b>
//             {' ' + person.profession + ' '}
//             known for {person.accomplishment}
//           </p>
//         </li>
//       )
//     );
//   return (
//     <article>
//       <h1>Chemists</h1>
//       <ul>{listItems}</ul>

//       <h1>Others</h1>
//       <ul>{listItems2}</ul>

//     </article>
//   );
// }


// CHALLENGE-2
// import { recipes } from './data.js';
// import {Fragment} from 'react';

// export default function RecipeList() {
//   return (
//     <div>
//       <h1 style={{color: 'red'}}>Recipes</h1>
//       {recipes.map(recipe => (
//         <Fragment key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <ul>
//             {recipe.ingredients.map(item => (
//               <li key={item}>
//                 {item}
//               </li>
//             ))
//           }</ul>
//         </Fragment>
//       ))}
//     </div>
//   );
// }


// CHALLENGE 3
// import { recipes } from './data.js';

// function Recipe ({id, name, ingredients}){
//   return(
//     <>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map(item =>
//           <li key={item}>
//             {item}
//           </li>
//         )}
//       </ul>
//     </>
//   )
// }

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe =>
//         <Recipe {...recipe} key={recipe.id} />
//       )}
//     </div>
//   );
// }

// CHALLENGE 4
// const poem = {
//   lines: [
//     'I write, erase, rewrite',
//     'Erase again, and then',
//     'A poppy blooms.'
//   ]
// };

// export default function Poem() {
//   let arr = [];

//   poem.lines.forEach((line, i) => {
//     arr.push(
//       <hr key={i + '-separator'} />
//     );
//     arr.push(
//       <p key={i + '-text'}>
//         {line}
//       </p>
//     );
//   });
//   // Remove the first <hr />
//   arr.shift();

//   return (
//     <article>
//       {arr}
//     </article>
//   );
// }

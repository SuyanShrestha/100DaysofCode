import React from 'react'
import ReactDom from 'react-dom'
import './index.css';

import {books} from './books'
import  Book from './Book'
import Booknav from './Booknav'


// const names = ['Suyan', 'Shristi'];
// const newNames = names.map((name)=>{
//   return <h1>{name}</h1>
// });
// console.log(newNames)

function BookList(){
  return (
    <div>
      <Booknav />     
      <section className="booklist">
        {books.map((book) => {
          // const {img, title, author} = book;
          return (
            <article>
              <Book key={book.id} {...book}></Book> 
            </article>
          );
        })}
      </section> 
    </div>
  );
}



// anther method of prop destructuring
// const Book = ({img, title, author}) => { return smthsmth}
// const Book = (props) => { return props.smthsmth}

// console.log(props);

// Approach for props destrcuturing, yesari values maa assign garni, so that props.img, props.title haru maa siddai img, props haru lekhn pawos
// const {img, title, author} = props;
// {/* <img src={props.img} alt="{props.title}" />
// <h1>{props.title}</h1>
// <h4>{props.author}</h4> */}

// const Book = ({img, title, author, children}) => {
//   return (
//     <article className='book'>
//       <img src={img} alt="{title}" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// }

ReactDom.render(<BookList/>, document.getElementById('root'));
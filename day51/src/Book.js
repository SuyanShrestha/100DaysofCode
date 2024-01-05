import React from 'react'

const Book = ({img, title, author}) => {

  const clickHandler = (e) => {
    console.log(e.target);
  }
  const complexExample = (author) => {
    console.log(author);
  }

  // console.log(props);
  // const {img,title,author} = props;
  return(
  // <article className='book' onMouseOver={() => {
  //   console.log(title);
  // }}>
  <article className='book'>
    <img src={img} alt="" />
    <h1 onClick={() => {
      console.log({title});
      }}>{title}</h1>

    <h4>{author}</h4>
    <button type='button' onClick={clickHandler}>Simple</button>
    <button type='button' onClick={() => complexExample(author)}>Click here</button>
  </article>
  );
}


export default Book

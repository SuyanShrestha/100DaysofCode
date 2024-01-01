// CREATING FIRST COMPONENT
import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css';

// stateless functional component
// always return JSX

function Greeting(){
  return <h1>I am suyan and this is my first component</h1>;
}

const Greeting2 = () => {
  return React.createElement("h1", {}, "hello world");
}

function Greeting3() {
  return (
    <div>
      <h1>Hellow Worldu</h1>
    </div>
  )
}

const Greeting4 = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, 'Hellow World'));
}

ReactDom.render(<Greeting/>,document.getElementById('root'));
ReactDom.render(<Greeting2/>, document.getElementById('root'));
ReactDom.render(<Greeting4/>, document.getElementById('root'));
ReactDom.render(<Greeting3/>, document.getElementById('root'));

// JSX RULES
// return single element
// div/section/arcticle or fragment
// use camelCase for html attribute
// close every element 
// formatting

function Greeting5() {
  return (
    <div>
      <h1>Hi I m Suyan</h1>
      <ul>
        <li>Hello1</li>
        <li>Hello2</li>
        <li>Hello3</li>
      </ul>
    </div>
  );
}

ReactDom.render(<Greeting5/>, document.getElementById('root'));

function Greeting6(){
  return(
    <div>
      <h3>Hi, you can fill in your contact info below: </h3>
      <ul>
        <li><a href="#.html">Facebook</a></li>
        <li><a href="#.html">Twitter</a></li>
        <li><a href="#.html">LinkedIn</a></li>
        <li><a href="#.html">Instagram</a></li>
      </ul>
      <input type="text" placeholder='Type your name here' />
    </div>
  );
}

ReactDom.render(<Greeting6/>, document.getElementById('root'));


// NESTED COMPONENT, REACT TOOLS
function BookList(){
  return (
    <div>
      <Person />
      <Message />
      <RestOfForm/>
      <section className='booklist'>
        <Bookjs />

      </section>
      <section className="booklist">
        <Book />
        <Book />
        <Book />

      </section> 
    </div>
  );
}

const Person = () => <h2 style={{textAlign: 'center'}}>Suyan Shrestha</h2>;
const Message = () => <p style={{margin: '0.5rem 2rem'}}>Here you can type your message</p>;
const  RestOfForm = () => {
  return(
    <div>
      <FormSubmit/>
      <Contact/>
    </div>
  );
}

const FormSubmit = () =>{
  return(
    <div style={{
      display: 'flex',
      gap: '1rem',
      marginLeft: '2rem'
    }}>
      <input type="text" placeholder='Type your message here' style={{
        height: '2.5rem',
        borderRadius: '2rem',
        padding: '0.75rem',
        fontSize: '0.9rem'
      }}/>
      <button type='submit' style={{
        height: '2.5rem',
        width: '5rem',
        borderRadius: '1rem',
        fontSize: '1.1rem',
        cursor: 'pointer'
      }}>Submit</button>
    </div>
  );
}

const Contact = () =>{
  return(
    <section style={{textAlign: 'center'}}>
      <h4>Contact :</h4>
      <ul style={{
        display: 'flex', gap:'3rem', listStyle: 'none', justifyContent: 'center'
      }}>
        <li><a href="random.html">Facebook</a></li>
        <li><a href="random.html">LinkedIn</a></li>
        <li><a href="random.html">Twitter</a></li>
        <li><a href="random.html">Instagram</a></li>
      </ul>
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <BookImage />
      <BookTitle />
      <Author />
    </article>
  );
}

const BookImage = () => (
  <img src="https://m.media-amazon.com/images/I/81TmnPZWb0L._SY466_.jpg" alt="Dune" />
)

const BookTitle = () => <h1>Dune (Dune Chronicles, Book 1)</h1>
// CSS JSX
// const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>by Frank Herbert (Author)</h4>

const Author = () => <h4>by Frank Herbert (Author)</h4>


// JS JSX

const author = 'by Frank Herbert (Author)';

const Bookjs = () => {
  const title = 'Dune';
  return (
    <article className='book'>
      <img src="https://m.media-amazon.com/images/I/81TmnPZWb0L._SY466_.jpg" alt="Dune" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
}


ReactDom.render(<BookList/>, document.getElementById('root'));
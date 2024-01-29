import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Suyan');
  const [user, setUser] = useState({ name: 'Shristi' });
  const [isEditing, setIsEditing] = useState(false);

  return <div>
    {/* OR EXAMPLE */}
    {/* aba API haru huda name yantyan nahuna sakxa ni ta, so yesari text lini ki default value lini vandini */}
    <h2>{text || 'default value'}</h2>

    {/* AND EXAMPLE */}
    {/* to control what elements to be displayed */}
    {/* yesto not operator (!) pani use garna paiyo yeta text state ko agadi*/}
    {!text && (
      <div>
        <h2>Whatever</h2>
        <h2>{name} says hi</h2>
      </div>
      )}

    {/* if user is true i.e. exists, then only display second component */}
    {user && <SecondComponent name = {user.name}/>}

    {/* TERNARY OPERATORS */}
    <h2 style={{margin: '3rem 0'}}>Ternary Operator</h2>
    <button className='btn'>{isEditing ? 'Add' : 'Edit'}</button>
    {user ? (
      <div>
        <h4>Hello there, Miss {user.name}</h4>
      </div>
    ) : (
      <div>
        <h4>Sorry, you need to login first</h4>
      </div>
    )}
  </div>;
};

const SecondComponent = ({name}) => {
  return(
    <div>
      <h2>Second component</h2>
      <h4>Second component's user name is {name}</h4>
    </div>
  )
} 

export default ShortCircuitExamples;

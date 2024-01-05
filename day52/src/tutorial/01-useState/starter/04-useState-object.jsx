import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Suyan',
    age: 22,
    hobby: 'listn songs'
  })
  // const [name, setName] = useState('Suyan');
  // const [age, setAge] = useState(22);
  // const [hobby, setHobby] = useState('listen songs');

  const displayPerson =() => {
    setPerson({name: 'Shristi', age: '100', hobby: 'draw'});
    // setPerson({...person, name: 'alex'})
  };                                  

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
      <button className='btn' onClick={displayPerson}>Show next</button>
    </>
  );
};

export default UseStateObject;

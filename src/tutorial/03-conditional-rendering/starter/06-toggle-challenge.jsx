import { useState } from 'react';

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);

  const toggleAlert = () => {
    if(value){
      setValue(false);
      return;
    }
    setValue(true);
  }

  return (
    <div>
      <button className="btn" onClick={toggleAlert}>Toggle</button>
      {/* Simpler version chahi yo muni ko  */}
      {/* <button className="btn" onClick={() => setShowAlert(!showAlert)}>Toggle</button> */}
      {/* {value && <SecondComponent/>} */}
      {value ? <SecondComponent/> :<ThirdComponent/>  }

    </div>
  );
};

const SecondComponent = () => {
  return <div className='alert alert-danger'>
    <h2>Hello World from Second Component</h2>
    </div>
}
const ThirdComponent = () => {
  return <div className='alert alert-danger'>
    <h2>Hello World from Third Component</h2>
    </div>
}

export default ToggleChallenge;

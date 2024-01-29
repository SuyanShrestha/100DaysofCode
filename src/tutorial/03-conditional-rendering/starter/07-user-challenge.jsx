import {useState} from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // yesto maa aba DB sanga yaa API sanga connect garinxa
    setUser({name : 'Suyan Shrestha'});
  }
  const logout = () => {
      setUser(null);
  }

  return <div>
    {user ? (
      <div>
        <h4>Hello there, {user.name}</h4>
        <button className='btn' onClick={logout}>logout</button>
      </div>
    ):(
      <div>
        <h4>You need to login first</h4>
        <button className='btn' onClick={login}>login</button>
      </div>
    )}
  </div>;
};

export default UserChallenge;

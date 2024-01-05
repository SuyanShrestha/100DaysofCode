import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
     try{
      const response = await fetch(url);
      const users = await response.json();
      // console.log(users);
      setUsers(users);
     }
     catch{
      console.log(error);
     }
    };
    fetchData();
  },[])
  return <section>
    <h3>Github users</h3>
    <ul className="users">
      {users.map((user)=>{
        console.log(user);
        let {id, login, avatar_url, html_url} = user;
        function PutUser(id){
          if(id===1){
            login='SuyanShrestha'
            avatar_url = 'https://i.pinimg.com/236x/f5/01/81/f50181866761734f80161551ae70ed2e.jpg';
            html_url = 'https://github.com/SuyanShrestha'
          }
          else if(id===2){
            login='ShristiKoju'
            avatar_url = 'https://i.pinimg.com/236x/94/a7/03/94a7035bf416038e6299aef40a561518.jpg'
            html_url = 'https://github.com/shristikoju1'
          }
        }
        return <li key={id}>
          {PutUser(id)}
          <img src={avatar_url} alt="login" />
          <div>
            <h5>{login}</h5>
            <a href={html_url} target="_blank">Profile</a>
          </div>
        </li>
      })}


    </ul>
  </section>;
};
export default FetchData;

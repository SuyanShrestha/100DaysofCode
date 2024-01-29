import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Suyan');

  return <div>
    {/* {if(someCondition){}}    // this wont work */}
    <h4>Falsy OR : {text || 'hi Suyan'}</h4>    {/* first ko false vayexi OR le second j xa tei herni vo  */}
    <h4>Falsy AND : {text && 'hi Shristi'}</h4>   {/* first ko false vayexi AND le chahi first kai false lai nai lidini vo */}
    <h4>Truthy OR : {name || 'hi suyan'}</h4>   {/* aba first ko true huda OR le chahi first ko j xa true tei lidini vo  */}
    <h4>Truthy AND : {name && 'hi Shristi'}</h4>  {/* feri first ko true nai huda AND le second maa k xa true or false vanerw herxa, tei value haldinxa*/}


  </div>;
};
export default ShortCircuitOverview;

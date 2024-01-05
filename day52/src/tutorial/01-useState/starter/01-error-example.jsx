const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count = count+1;
    console.log(count);
  };
  const decrement =() => {
    count = count-1;
    console.log(count);
  }
  return <div>
    <h2>{count}</h2>
    <button type="button" onClick={handleClick} className="btn">UP</button>
    <button type="button" onClick={decrement} className="btn">DOWN</button>
  </div>;

};

export default ErrorExample;

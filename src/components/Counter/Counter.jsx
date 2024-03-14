/* eslint-disable react/prop-types */
import './Counter.css';

function Counter({count = 0}) {
  if(count === 0) return null;

  return (
    <div className="counter">
    <span className="counter__count">{count}</span>
  </div>
  )
}

export default Counter;

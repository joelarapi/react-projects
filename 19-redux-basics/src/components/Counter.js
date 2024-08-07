import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();


  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)


  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () =>{
    dispatch(counterActions.increase(5));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter ())
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease (5))
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={decreaseHandler}>Decrease by 5 </button>



    </main>
  );
};

export default Counter;

import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../Store/Counter';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);//useSelector's primary purpose is to select data from the Redux store. When you use useSelector, you can subscribe to the Redux store state and extract the specific data you need from it. yha hm specific counter state ko le rhe jb counter change hoga to hi ye useSelector bhi.

  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increament());
  } //dispatch({type: 'increament'}); this we used for redux, we dispatched the action {is bracken ke andar action hi hota h just object which takes type property ab ye action dispatched karega store me reducer ke through waha reducer me increament ya decreament jo bhi type h to increament me jayega ye waha se +1 hoga counter aur uper selector se counter me couter state le liye change hone me aur wo counter number niche show kr diye}

  const decrementHandler = () => {
    dispatch(counterActions.decreament());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); //this 5 will extract as payload by redux toolkit.
    //dispatch({type: 'increase5', amount: 5}); this we used for redux above we used for redux toolkit
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

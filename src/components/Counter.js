import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {counterActions} from '../store/index';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
    //{type:SOME_UNIQUE_IDENTIFIER, payload:5}
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

//Class based component approach
 
// import {Component} from 'react';
// import {connect} from 'react-redux';

// class Counter extends Component{
  
//   toggleCounterHandler = () => {};

//   incrementHandler = () => {
//     this.props.increment();
//   };
//   decrementHandler = () => {
//     this.props.decrement();
//   };
  
//   render(){
//     return(
//       <main className={classes.counter}>
//        <h1>Redux Counter</h1>
//        <div className={classes.value}>{this.props.counter}</div>
//        <div>
//           <button onClick={this.incrementHandler}>Increment</button>
//           <button onClick={this.decrementHandler}>Decrement</button>
//        </div>
//        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//      </main>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter:state.counter
//   }
// }
// const dispatchPropsToState = (dispatch) => {
//   return{
//     increment:()=>dispatch({type:'increment'}),
//     decrement:()=>dispatch({type:'decrement'})
//   }
// }
// const temp1 = connect(mapStateToProps,dispatchPropsToState); 
// //connect was called by passsing maptoprops and dispatchpropstostate and in return a function was obatained
// const temp2 = temp1(Counter); 
// //con takes Counter as arguement and passes functions counter,increment and decrement as props to Counter 
// export default temp2;


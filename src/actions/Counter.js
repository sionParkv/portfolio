import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from "../actions/action";

function Counter(props) {
    return (
      <div>
        <p>Count: {props.count}</p>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
      </div>
    );
  }
  
  const mapStateToProps = (state) => ({
    count: state.counter.count,
  });
  
  const mapDispatchToProps = {
    increment,
    decrement,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);
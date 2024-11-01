import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  increment3,
  sub2,
  incrementAsync,
  selectCount,
  selectUserName,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;
  const [deltanum, setdeltanum] = useState(0)
  return (
    <div>
      {userName}
      <div className={styles.row}>
       
        delta<input onChange={(e)=> setdeltanum(e.target.value)}/>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment({n:+deltanum,userName:"aaa"}))}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
    
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(increment3(incrementValue))}
        >
          Add 3
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(sub2(incrementValue))}
        >
          sub 2
        </button>

      </div>
    </div>
  );
}

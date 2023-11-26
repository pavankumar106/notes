## REDUX TOOLKIT
#### REDUX is a state management library that allows you to have global state, in the context of react it measn that you can have a state that is accessible from any components no matter where they are in tree.

#### 3 different concepts in REDUX 
1. Store : It is essentially a state, a global state accessible from any component. Store is usually made up of multiple slices of state each responsible for certain domain in the application.
2. Actions : That you use to tell redux that what it should to the state.
3. Reducer : A reducer is a function that takes in the current state of an application and an action as arguments, and returns a new state based on the action.


```typescript
// state/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```
Now connect this store to react
```typescript
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from '.state/store.ts'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
Create a slice
```typescript
// state/counter/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

```

```typescript
// components/Counter.tsx
import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
```

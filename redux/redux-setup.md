### Redux setup
1. install redux-toolkit
2. `npm install @reduxjs/toolkit`
3. Create a store.js in src folder and include the following
   ```
   import { configureStore } from '@reduxjs/toolkit'
   export const store = configureStore({
   reducer: {},
    })
   ```

4. Change index.js according to the following
  ```
    import React from 'react'
    import ReactDOM from 'react-dom'
    import './index.css'
    import App from './App'
    import { store } from './app/store'
    import { Provider } from 'react-redux'

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
      )
  ```
5. Create redux slice
   ```
      import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
      value: 0,
    }

    export const counterSlice = createSlice({
      name: 'counter',
      initialState,
      reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    },
    })

    // Action creators are generated for each case reducer function
    export const { increment, decrement, incrementByAmount } = counterSlice.actions

    export default counterSlice.reducer
   ```

---
title: "Beginner's Guide to React Redux"
date: "2020-03-01"
status: 🌸
---

Redux is a library used to contain the state of your application in one single location. Redux is language-agnostic and can be used with React, Vue, Angular, or even vanilla JS. I really love using Redux with React. As our React apps become bigger and more complicated the state can get unwieldy and hard to pass around to different components. This is where Redux can help us. It's generally recommended to start with Redux at the beginning of creating your project but it's not impossible to convert a project to using Redux.

We can keep all of the data we need in a store that is separate from our React components. One of the biggest benefits of React is how fast and performant it is, but unnecessary re-renders can slow your project down. One of React’s core features is that whenever a component’s state or props are updated the component will re-render. This tends to slow down our app when we have long component trees and complex state that needs to be passed to multiple children. The general flow of Redux is you send an action to the reducer which then updates the state. Only the components that rely on that state will then be re-rendered, which saves us on performance. The first step to setting up Redux is creating the store.

## Redux Store

In order to save our state we will want to set up our store and hook it up to our app. Luckily Redux comes with the createStore() method when we install the package. The createStore method accepts a reducer. A reducer is a function that updates our state. The Provider is used to connect our app with the store we created. In the index.js file, we can create the store and connect it with our App component so that all our child components have access to the store.

```javascript
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  <Provider/>,
document.getElementById('root');

```

## Reducers

Now that we've created our store, which takes a reducer, we'll have to make the reducer. Reducers take in actions and return a new state based on the type of action. Reducers rely on pure functions to return a new state and not mutate the current state.

```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_VOTE":
      return {
        animes: {
          ...state.animes,
          [action.payload.id]: {
            ...state.animes[action.payload.id],
            votes: state.animes[action.payload.id].votes + 1,
          },
        },
      }
    default:
      return state
  }
}
```

The code above is an example of a reducer that is typically written with a switch statement. You'll notice that we use the ES6 spread operator, which is very important for creating pure functions. The INCREASE_VOTE case will return a new object with all of the animes in the previous state (...state.animes) except the particular id of the anime we send in the payload. All the information about that particular anime will stay the same (...state.animes[action.payload.id]), except we will increment the number of votes it has. The default case of the switch statement is very important because if we send an action that doesn't have a case in the switch statement we don't want to affect the original state.

## Actions

The only way to change the state of the store is to dispatch an action. An action is just a plain JavaScript object. Actions normally contain a type key which describes the state change, and a payload of any data needed to change the state.

```javascript
export const increaseVote = id => {
  return {
    type: "INCREASE_VOTE",
    payload: { id },
  }
}
```

This action will be dispatched or sent to the reducer which will read the type on the object and do something based on that. It is standard to define your types in SNAKE_CASE with all capitals. Like the function's name suggest if you look at the reducer we wrote above this increaseVote function will increment the vote of a specific anime, based on the id, by 1.

## Connect

In order to connect our components to the store, we need to use the connect function provided by react-redux. In our export statement, we can use the connect function to wrap the component we want to have access to the store.

```javascript
import { connect } from "react-redux"

export default connect()(Animes)
```

Now our component is connected to the store but we need to do one more thing in order to use the state that is held in our store. We need to map state to props.

```javascript
const mapStateToProps = state => {
  return {
    animes: state.animes,
  }
}

export default connect(mapStateToProps)(Animes)
```

We pass mapStateToProps into the connect function and now we can access the state in the store as props(props.anime). Before adding Redux to our app if we wanted to update the state we had to call setState, but with Redux we will need to dispatch our actions to the reducer. And this is done through a function mapDispatchToProps. Similar to our mapStateToProps we will create another function that returns an object of all of our actions.

```javascript
import { increaseVote, decreaseVote } from "../actions"

const mapDispatchToProps = dispatch => {
  return {
    increaseVote: id => dispatch(increaseVote(id)),
    decreaseVote: id => dispatch(decreaseVote(id)),
  }
}

export default connect(null, mapDispatchToProps)(AnimeCard)
```

You'll notice the connect now features a null because the first argument accepted by connect is always mapStateToProps, and in this component we only need mapDispatchToProps.

And with that our app should be connected to the Redux store and be able to read and update from the store. If you'd like to see more of the code I made a small [demo app](https://github.com/Taljjaa/React-Redux-Anime-Demo)!

Favorite Resources:

- React-Redux [Docs](https://react-redux.js.org/introduction/quick-start)
- [Lecture](https://www.youtube.com/watch?v=U5zmynk4fFI) given by my Flatiron Coach [Lucy](https://twitter.com/LucySuddenly)

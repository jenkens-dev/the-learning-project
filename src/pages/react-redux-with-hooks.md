---
title: "React Redux with Hooks"
date: "2020-03-07"
status: "Bloomed"
---

If you're not familiar with [Redux](https://dev.to/talia/beginner-s-guide-to-react-redux-585e) or [hooks](https://dev.to/talia/react-hooks-1nme) feel free to check out my other articles explaining the topics and then come back! When I was first learning Redux I found all the moving parts and files incredibly hard to wrap my head around. Surprisingly, React hooks made the process of using Redux a lot easier for me. Hooks allow us to write smaller and sometimes easier to read functional components and with Redux hooks we can eliminate the tedious and confusing connect, mapStateToProps, and mapDispatchToProps.

Connecting your app to the Redux store still follows the same process with hooks as it does without hooks. You will need to create a store, which accepts a reducer, and pass that store to the Provider component that will wrap your app. The main difference with hooks comes in connecting specific components to the store to access state.

Before hooks if we wanted a component to have access to the store we needed to use the connect higher-order component.

```javascript
import { connect } from "react-redux"

export default connect()(Animes)
```

Now our Animes component has access to the store and if we wanted state or the ability to change the state we would have to mapStateToProps and mapDispatchToProps

```javascript
import { increaseVote, decreaseVote } from "../actions"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
    animes: state.animes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseVote: id => dispatch(increaseVote(id)),
    decreaseVote: id => dispatch(decreaseVote(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimeCard)
```

For me, it was pretty easy to mess up these lines or even forget to add them in the first place! Compare the above non-hooks version to the hooks version below.

```javascript
import { useSelector, useDispatch } from "react-redux"
import { INCREASE_VOTE as increaseVote } from "../actions"

const dispatch = useDispatch()
const animes = useSelector(state => state.animes)
;<button onClick={() => dispatch(increaseVote)}>Increase Vote</button>
```

We can use the useSelector hook to access the state of the store, instead of mapStateToProps. useSelector takes the current state of the store as a parameter and returns a piece of state you want. A potential hurdle with useSelector is that it uses strict equality, different from the previous mapStateToProps, which checked if the fields changed. This can cause potential problems when trying to return an object from useSelector, so it's best practice to call useSelector once for each value of your state. Instead of using mapDispatchToProps we can use the useDispatch hook and individually dispatch any actions we need to the reducer. To get the overall picture of hooks versus non-hooks here is the same component written in both ways.

No-Hooks

```javascript
import React from "react"
import { increaseVote, decreaseVote } from "../actions"
import { connect } from "react-redux"

const AnimeCard = ({ anime, increaseVote, decreaseVote, animesInStore }) => {
  return (
    <div className="card">
      <p>{Object.keys(animesInStore).length}</p>
      <h2>Name: {anime.name}</h2>
      <p>Votes: {anime.votes}</p>
      <img src={anime.image} alt={anime.name}></img>
      <br />
      <button
        onClick={() => {
          increaseVote(anime.id)
        }}
      >
        UpVote
      </button>
      <button
        onClick={() => {
          decreaseVote(anime.id)
        }}
      >
        DownVote
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    animesInStore: state.animes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseVote: id => dispatch(increaseVote(id)),
    decreaseVote: id => dispatch(decreaseVote(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimeCard)
```

With Hooks

```javascript
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increaseVote, decreaseVote } from "../actions"

const AnimeCard = ({ anime }) => {
  const dispatch = useDispatch()
  const animesInStore = useSelector(state => state.animes)
  return (
    <div className="card">
      <p>{Object.keys(animesInStore).length}</p>
      <h2>Name: {anime.name}</h2>
      <p>Votes: {anime.votes}</p>
      <img src={anime.image} alt={anime.name}></img>
      <br />
      <button
        onClick={() => {
          dispatch(increaseVote(anime.id))
        }}
      >
        UpVote
      </button>
      <button
        onClick={() => {
          dispatch(decreaseVote(anime.id))
        }}
      >
        DownVote
      </button>
    </div>
  )
}

export default AnimeCard
```

Not only did we save about 10 lines of code, personally I think it became a lot easier to read and write. And because we aren’t using the connect higher-order component anymore our render tree is much cleaner. I hope you enjoyed this blog post and are thinking about using Redux with hooks in one of your upcoming projects. Feel free to comment with any questions!

Favorite Resources:
React-Redux [docs](https://react-redux.js.org/api/hooks)
Using Redux with React Hooks [article](https://thoughtbot.com/blog/using-redux-with-react-hooks)

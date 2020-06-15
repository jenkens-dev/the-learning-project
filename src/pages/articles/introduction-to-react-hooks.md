---
title: "Introduction to React Hooks"
date: "2020-02-22"
status: 🌻
---

React hooks were added to React in February 2019. One of their main features is they give us a way to use state without having to define a class component. Our functional components can now have features that were specific to class components like state and lifecycles. Without large class components in our code, it is easier and cleaner to read. Using hooks helps simplify state management and component layouts. Hooks are completely optional and backward-compatible. This means that all our working knowledge of React isn’t obsolete, but can be grown and updated. Hooks were proposed to solve some of React’s problems like sharing state, components becoming unwieldy as they grew more complex, and confusing class syntax.

##useState Hook

```javascript
const Theme = () => {
  const [theme, setTheme] = React.useState("light")
  const toDark = () => setTheme("dark")
  const toLight = () => setTheme("light")
  return (
    <div className={theme}>
      {theme === "light" ? (
        <button onClick={toDark}>🔦</button>
      ) : (
        <button onClick={toLight}>💡</button>
      )}
    </div>
  )
}
```

The useState hook allows us to add state to a functional component, and it's one of the first hooks I suggest using. The useState hook can be initialized with a starting value and it returns two values. The first is equivalent to the initial state you're used to setting up with this.state. The second value is a function that can be used to update the state, similar to this.setState. We can assign these two values to whatever variable names we want with array destructuring.

```javascript
const [theme, setTheme] = React.useState("light")
```

Now we have our state set in the variable theme and we can update our state with the setTheme function. The useState hook can be used multiple times in the same component and should be used for every state value you want to keep track of. An important aspect of the useState hook is its ability to preserve values between re-renders. Normally any values within a function will be re-initialized when the function is called. But when a functional component with the useState hook re-renders, React knows that the useState hook has already been invoked and it will remember the previous value of the state.

##useEffect Hook

The useEffect is important for controlling the side effects of your component. A side effect is anything that interacts with the outside world or outside its scope. This includes fetching data, changing the DOM, and making network requests. These effects were normally done with class components and lifecycle methods before hooks. useEffect runs every time a component renders, because of this if you re-render within useEffect you will cause an infinite loop. In order to prevent this, useEffect takes an optional second parameter.

```javascript
React.useEffect(() => {
  // will be invoked on the initial render and every subsequent re-render
})

React.useEffect(() => {
  // will be invoked on the initial render and when id changes
}, [id])

React.useEffect(() => {
  // will be invoked ONLY on the initial render
}, [])
```

Through the power of the useEffect and useState hooks we can write functional components with all the power that is normally reserved for class components.

```javascript
useEffect(() => {
  fetch(
    `https://bookclub-builder-server.herokuapp.com/api/v1/bookclubs/${match.params.id}`
  )
    .then(response => response.json())
    .then(data => {
      setBookclubUsers(data)
      dispatch(currentPoll(data.poll[0]))
    })
    .finally(() => {
      setFetched(true)
    })
}, [match.params.id])
```

Above is an example of a useEffect hook I used in my final project at Flatiron. The hooks fetches a specific bookclub from my backend. You'll notice that the dependency array includes match.params.id which means that every time a new bookclub is clicked on the useEffect hook will run.

I hope you've enjoyed this beginner introduction to hooks! There's still a lot of cool things out there to learn and I hope this gets you on the right path.

Favorite Resources:

- [React Docs](https://reactjs.org/docs/hooks-intro.html)
- [React Hooks Tutorial for Beginners by Valentino Gagliardi](https://www.valentinog.com/blog/hooks/)
- [React Hooks Video by Tyler McGinnis](https://tylermcginnis.com/why-react-hooks/)

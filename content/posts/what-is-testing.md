---
title: "What is Testing?"
date: "2019-12-06"
status: 🌻
---

## Why Do We Test?

In its simplest definition, a software test is code that returns an error when the actual value does not equal the expected value. Testing your code helps increase your workflow. If you don't know what needs to be worked on or fixed it's easy to follow Test Drive Development to guide you. Testing gives us confidence. If we write good tests, we can eliminate future bugs before they are ever pushed to production. This gives us confidence that we are writing good code that won't break anything and keeps our users happy.

```javascript
const actual = true
const expected = false
if (actual !== expected) {
  throw new Error(`${actual} is not ${expected}`)
}
```

## Different Type of Test

There are four main types of testing, they differ in the cost to run, the speed at which they execute, and how much confidence they give you in your code. Every level of testing has its trade-offs.

### Static Tests

Static Testing is the easiest level of testing that gives you the best return on investment. If you are looking to begin your testing journey this is where you should start. They're fast and easy to run, but don't give you a lot of confidence in your code since they don't test logic. Static Testing is used for finding typos and type errors in your code. While this sounds simple it can save you a lot of time and headaches. Popular tools include ESLint and TypeScript.

### Unit Tests

Unit Tests are used to test just a single part of your program. You want to verify the behavior of a function independently of the other pieces of your code. Unit Tests are cheap and easy to set up as well as fast to run. They are vital to see if each piece of your code is working independently.

### Integration Tests

![Unit tests pass, integration tests fail](https://media.giphy.com/media/EPR5sgG0y4SaY/giphy.gif)
Unit Tests can cover a lot of ground but they can still pass with broken code. Two tests might pass in isolation but fail when used together. This is where integration tests can help us cover more code and behavior. Integration Tests make sure everything is working together correctly. They balance the trade-offs between speed and confidence. Unit Tests and Integration Tests combined will give you a lot of confidence that your code is working correctly and any code you refactor or change will be reflected in your tests.

### End to End Tests

End to End (E2E) tests help you test your whole application, from login and sign up to endpoint. These tests should reflect what you think your user will do and the flow of the page. E2E testing helps you determine if everything connects and works well with each other, such as the database, network, and other parts of your code. E2E touches all parts of your code, and because of this, they are slow and expensive to write. But they give you the most confidence that your code is working as expected.

Testing is an important part of software development and now you're on your way. The first step of learning how to write tests is learning what are the different tests. I hope you'll continue to read along on my testing journey!

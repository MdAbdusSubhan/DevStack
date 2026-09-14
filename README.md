# Tech Stack Explorer

A simple React project where users can explore different technology stacks and select the ones they are interested in. I built this project to practice React, TypeScript, props, state management, API data, and conditional rendering.

## Live Demo

[View Live Project](https://prismatic-crisp-6df47b.netlify.app/)

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* Vite

## Features

### 1. Explore Technology Stacks

Users can see different technologies and their basic information in separate cards.

### 2. Select Your Stack

Users can select technologies they want to learn or use. The selected items are updated dynamically.

### 3. Interactive UI

The project uses React state to update the interface when users select or remove technologies. Toast notifications are also used to give feedback to the user.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript. React uses JSX because it makes writing and understanding UI components easier.

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data that belongs to a component and can change while the application is running.

For example, I used props to pass stack data to child components, while state is used to keep track of selected technologies.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store data that can change.

In this project, I used it to keep track of the technologies selected by the user and update the UI when the selection changes.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run some code after a component renders.

It can be used for things like fetching data from an API or loading external data. I used it to load the JSON data when the component needed the data.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item was added, removed, or changed, so it can update the UI correctly.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when no technology is selected, I can show an empty message:

```tsx
{stackButton.length === 0 && (
  <p>No stack selected yet.</p>
)}
```

Here, the message only appears when the selected stack array is empty.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through **props**.

If the child needs to send something back, the parent can pass a **function as a prop**. The child calls that function and sends the required data back to the parent.

For example:

```tsx
<StackCard
  stackData={stackData}
  setStackButton={setStackButton}
/>
```

Here, the parent passes data and a state-updating function to the child.

---

## What I Practiced

This project helped me practice:

* React components
* JSX
* TypeScript types and interfaces
* Props
* `useState`
* `useEffect`
* Rendering lists with `.map()`
* Conditional rendering
* Passing functions through props
* Working with JSON data
* Responsive UI with Tailwind CSS
* Toast notifications

## Author

**Md Abdus Subhan**

Built as part of my React and TypeScript learning journey.

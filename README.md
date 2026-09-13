#  Dev Stack

A modern and interactive web application that helps developers explore different web technologies and build their own personalized development stack.

Users can explore technologies like HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap, Sass, Redux, Node.js, Express.js and more, then add their favorite technologies to their stack.

---

##  Project Overview

Dev Stack is a technology exploration website where users can browse different technologies and create their own development stack.

The project has a clean and responsive UI with interactive technology cards and a personalized stack section.

---

##  Technologies Used

-  React.js
-  TypeScript
-  Tailwind CSS
-  Vite
-  JSON
-  React Hooks
-   `useState`
-   `useEffect`
-  React Icons
-  Responsive Design

---

##  Features

### 1.  Explore Technologies

Users can explore different technologies from the technology cards.

Each technology contains information such as:

- Technology name
- Description
- Category
- Difficulty level
- Rating
- Technology icon

---

### 2.  Build Your Own Stack

Users can add technologies to their personal development stack by clicking the **Add to Stack** button.

The selected technologies are displayed separately in the **Your Stack** section.

---

### 3.  Manage Your Stack

Users can manage their selected technologies easily.

They can:

- Add technologies to the stack
- Remove technologies from the stack
- View their selected technologies
- Clear the entire stack

The UI also provides feedback when a technology has already been added.


<h1>React Questions & Answers</h1>

1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML.

It allows us to write HTML-like code inside JavaScript/TypeScript.

I used JSX throughout this project to create React components and build the user interface easily.


2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is used to store and manage data that can change inside a component.

In this project, I used props to pass technology data and functions between components, while state is used to manage the selected technology stack.

3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage changing data inside a React component.

I used useState in this project to manage the selected technologies in the user's stack and update the UI when technologies are added or removed.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

I did not use useEffect to load the JSON data. I used fetch() to get the data and React's use() hook to read the Promise and display the technologies dynamically.

5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list.

It helps React understand which item has changed, been added, or removed.

In this project, I used the technology id as the key:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

Using a unique id makes list rendering more efficient and avoids React warnings.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

I used conditional rendering in the Your Stack section.

When the user has not selected any technology, an empty stack message is displayed.

For example:

{selectedTechnology.length === 0 ? (
  <p>Your stack is empty. Add some technologies!</p>
) : (
  selectedTechnology.map((technology) => (
    <StackCard
      key={technology.id}
      technology={technology}
    />
  ))
)}

So, if the stack is empty, the empty message is shown. Otherwise, the selected technologies are displayed.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can send data to a child component using props.

For example:

<TechnologyCard
  technology={technology}
  selectedTechnology={selectedTechnology}
  setSelectedTechnology={setSelectedTechnology}
/>

Here, the parent sends the technology data and state-related information to the child.

The child can send something back to the parent by calling a function received through props.

For example:

<button onClick={() => addStack(technology)}>
  Add to Stack
</button>

Here, addStack is a function from the parent component. The child calls it when the user clicks the button, and the parent updates the state.


Project Goal

The main goal of this project was to practice React fundamentals by building a real-world interactive application.

Through this project, I practiced:

React Components
Props
State Management
useState
useEffect
Conditional Rendering
.map()
Event Handling
Parent-to-Child Data Flow
Child-to-Parent Communication
TypeScript with React
Responsive UI with Tailwind CSS
Working with JSON data

#  👨‍💻 Developer

##  Piyas Ahmed

Built with ❤️ using React, TypeScript and Tailwind CSS.



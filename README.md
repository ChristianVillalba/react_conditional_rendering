# React Conditional Rendering
Created with [CodeSandbox](https://codesandbox.io/)  
Notes from: React module  
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu


## Description

The heading "Why are you still working" will be render from 13:00 until next day.       
From 00:00 to 12:59, no heading will be render.

---

## Notes 

### Conditional Rendering
Techniques to show different React Components depending on some sort of condition.

Eg: creating a [Login Flow:](https://github.com/ChristianVillalba/react_conditional_rendering_login_form.git)          
Different components depending on whether the user was logged in or if they were logged out.         
We can extract the components so they can be reused.       
Each component should have a single responsibility.    

When using JSX we can use curly braces { } to inject Expressions,     
but to check conditions we use Conditional Statements (if, else, else if) ...

### Ternary Operator
It's a way to convert our Conditional Satament into an Expression that we can use in JSX:
```
CONDITION ? DO IF TRUE : DO IF FALSE
```
Instead of a statement we now have three expressions. 

eg: ```  isClouddy === true ? bringUmbrella() : bringSunscreen() ```     
The condition ```  isClouddy === true ```  is an expression      
```bringUmbrella()``` is an expression     
``` bringSunscreen() ``` is also an expression.     
Therefore the whole thing is also just an expression.     

eg: An App that will render "Hello" if the user is logged in; if the user is not logged in, it will render the Login Form 
```javascript
var isLoggedIn = false;
function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
    </div>
  );
}
```

To render something if we have certain conditions but nothing at all if the conditions do not meet:       
```
CONDITION ? renderComponent : null
```
eg: in our App: The heading only will be rendered in certain conditions, else nothing will be rendered.      
```javascript
const currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">
      { currentTime >   12 ? <h1>Why are you still working?</h1> : null}
    </div>
  );
}
```
but there is an easier and shorter way ...


### && in JavaScript 
Expression && Expression      

We can use the two ampersands ```&&``` in Javascript as ```AND Operator```,     
where we have one expression and another expression.     
They're both evaluated if they're both true.     

### && in React
Condition && Expression     
True && Expression     
False && Expression[not evaluated]     

Eg: we can refactor our expression:     
```javascript 
{currentTime > 12 ? <h1>Why are you still working</h1> : null} 
```    
We can delete the ternary operator ```?```, add ```&&``` and delete ```: null``` (it won't be evaluated)     
```
javascript {currentTime > 12 && <h1>Why are you still working</h1>} 
```    

---
## What I have learned with this project

* Use components and props.
* Render componenets depeding of certain condition (if statement) .
* Use TERNARY OPERATOR
    * Two options depending if the condition is true or false
    * Render component if condition true. Nothing at all (null) if false 
* && (as AND Operator) in React:    
    * Condition && Expression:
      * true && Expression
      * false && Expression-Not-Evaluated

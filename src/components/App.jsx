import React from "react";

// eg: Conditionlal Rendering - LogIn Form
// import Login from "./Login";
// var isLoggedIn = false;
// function App() {
//   return <div className="container">{isLoggedIn ? <h1>Hello</h1> : <h1>Hello</h1>}</div>;
// }

const currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">
      {/* ternary operator */}
      {/* {currentTime > 12 ? <h1>Why are you still working</h1> : null} */}
      {/* && instead of ternary operator, : null won't be evaluated if the first condition is false */}
      {currentTime > 12 && <h1>Why are you still working</h1>}
    </div>
  );
}

export default App;

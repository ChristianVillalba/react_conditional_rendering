import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input inputType={"text"} inputPlaceholder={"Username"} />
      <Input inputType={"password"} inputPlaceholder={"password"} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

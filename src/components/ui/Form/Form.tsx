"use client";
import React, { useState } from "react";
import styles from "./form.module.scss";
import { login } from "@/app/login/actions";
import { signup } from "@/app/signUp/action";

const Form = () => {
  const [type, setType] = useState<"login" | "reg">("login");
  return (
    <div>
      <h1>{type === "login" ? "Login" : "Sign Up"}</h1>
      <form className={styles.form}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <div className={styles.btnWrapper}>
          <button formAction={login}>Log in</button>
          <button formAction={signup}>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

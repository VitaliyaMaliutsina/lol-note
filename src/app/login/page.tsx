import styles from "@/components/ui/Form/form.module.scss";
import { login } from "@/app/login/actions";
import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <form className={styles.form} action={login}>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <div className={styles.btnWrapper}>
        <button type={"submit"}>Log in</button>
        <Link href={"/signUp"}>Sign up</Link>
      </div>
    </form>
  );
}

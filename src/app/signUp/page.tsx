import styles from "@/components/ui/Form/form.module.scss";
import Link from "next/link";
import React from "react";
import { signup } from "@/app/signUp/action";

export default async function SingUpPage() {
  return (
    <form className={styles.form} action={signup}>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />

      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="description">Description:</label>
      <input id="description" name="description" type="text" required />

      <div className={styles.btnWrapper}>
        <Link href={"/login"}>Log in</Link>
        <button type={"submit"}>Sign up</button>
      </div>
    </form>
  );
}

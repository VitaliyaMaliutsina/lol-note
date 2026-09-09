import React from "react";
import LinkButton from "@/components/ui/LinkButton";
import { logoutAction } from "@/app/actions";
import Button from "@/components/ui/Button";

type TProps = {
  isAuth: boolean;
};

const UserControl = ({ isAuth }: TProps) => {
  return (
    <>
      {isAuth ? (
        <Button onClick={() => logoutAction()}>Выйти</Button>
      ) : (
        <LinkButton href={"/login"}>Войти</LinkButton>
      )}
    </>
  );
};

export default UserControl;

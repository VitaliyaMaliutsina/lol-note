import React from "react";
import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";
import { requireAuth } from "@/lib/helpers/requireAuth";

const UserControl = async () => {
  // const isAuth = await requireAuth();

  return <LinkButton href={"/login"}>Войти</LinkButton>;
};

export default UserControl;

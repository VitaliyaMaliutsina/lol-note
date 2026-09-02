import React from "react";
import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";
import { requireAuth } from "@/lib/helpers/requireAuth";

const UserControl = async () => {
  return <LinkButton href={"/login"}>Войти</LinkButton>;
};

export default UserControl;

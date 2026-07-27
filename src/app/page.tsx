import HomePage from "@/components/pages/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Домашняя страница",
  description: "Просмотр всей информации о заметках",
};

export default function Home() {
  return <HomePage />;
}

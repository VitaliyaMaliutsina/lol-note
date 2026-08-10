import HomePage from "@/components/pages/HomePage";
import { Metadata } from "next";
import { getChampionsApi } from "@/lib/api/champion";
import { formatResChampions } from "@/lib/helpers/formatChampions";

export const metadata: Metadata = {
  title: "Домашняя страница",
  description: "Просмотр всей информации о заметках",
};

export const revalidate = 86400;

export default async function Home() {
  const res = await getChampionsApi();
  const champions = formatResChampions(res);

  return <HomePage champions={champions} />;
}

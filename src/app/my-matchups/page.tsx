import { Metadata } from "next";
import MyMatchupsPage from "@/components/pages/MyMatchupsPage";
import { getChampionsApi } from "@/lib/api/champion";
import { formatResChampions } from "@/lib/helpers/formatChampions";

export const metadata: Metadata = {
  title: "Мои матчапы",
  description: "Просмотр моих матчапов",
};

export default async function MyMatchups() {
  const res = await getChampionsApi();
  const data = JSON.stringify(res.data, null, 2);
  const champions = formatResChampions(res);
  return (
    <>
      <MyMatchupsPage />
      <pre>{data}</pre>
    </>
  );
}

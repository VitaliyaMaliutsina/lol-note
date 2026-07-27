import { Metadata } from "next";
import MyMatchupsPage from "@/components/pages/MyMatchupsPage";

export const metadata: Metadata = {
  title: "Мои матчапы",
  description: "Просмотр моих матчапов",
};

export default function MyMatchups() {
  return <MyMatchupsPage />;
}

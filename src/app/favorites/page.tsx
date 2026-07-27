import { Metadata } from "next";
import FavoritesPage from "@/components/pages/FavoritesPage";

export const metadata: Metadata = {
  title: "Избранное",
  description: "Просмотр избранных матчапов",
};

export default function Favorites() {
  return <FavoritesPage />;
}

import { Metadata } from "next";
import DraftsPage from "@/components/pages/DraftsPage";

export const metadata: Metadata = {
  title: "Черновики",
  description: "Просмотр черновиков матчапов",
};

export default function Drafts() {
  return <DraftsPage />;
}

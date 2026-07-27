import { Metadata } from "next";
import HelpPage from "@/components/pages/HelpPage";

export const metadata: Metadata = {
  title: "Помощь",
  description: "Помощь и обратная связь",
};

export default function Help() {
  return <HelpPage />;
}

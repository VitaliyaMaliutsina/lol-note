import { Metadata } from "next";
import SettingsPage from "@/components/pages/SettingsPage";

export const metadata: Metadata = {
  title: "Настройки",
  description: "Общие настройки приложения",
};

export default function Settings() {
  return <SettingsPage />;
}

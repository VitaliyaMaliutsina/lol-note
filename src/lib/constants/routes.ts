import HomeIcon from "@/assets/icons/home.svg";
import MatchupsIcon from "@/assets/icons/matchups.svg";
import DraftsIcon from "@/assets/icons/drafts.svg";
import FavoritesIcon from "@/assets/icons/favorites.svg";
import SettingsIcon from "@/assets/icons/settings.svg";
import HelpIcon from "@/assets/icons/help.svg";

export const routes = [
  {
    id: "1",
    title: "Главная",
    href: "/",
    icon: HomeIcon,
  },
  {
    id: "2",
    title: "Матчапы",
    href: "/my-matchups",
    icon: MatchupsIcon,
  },
  {
    id: "3",
    title: "Черновики",
    href: "/drafts",
    icon: DraftsIcon,
  },
  {
    id: "4",
    title: "Избранное",
    href: "/favorites",
    icon: FavoritesIcon,
  },
  {
    id: "5",
    title: "Настройки",
    href: "/settings",
    icon: SettingsIcon,
  },
  {
    id: "6",
    title: "Помощь",
    href: "/help",
    icon: HelpIcon,
  },
];

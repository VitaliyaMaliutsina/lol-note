import HomeIcon from "@/lib/assets/icons/home.svg";
import MatchupsIcon from "@/lib/assets/icons/matchups.svg";
import DraftsIcon from "@/lib/assets/icons/drafts.svg";
import FavoritesIcon from "@/lib/assets/icons/favorites.svg";
import SettingsIcon from "@/lib/assets/icons/settings.svg";
import HelpIcon from "@/lib/assets/icons/help.svg";

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

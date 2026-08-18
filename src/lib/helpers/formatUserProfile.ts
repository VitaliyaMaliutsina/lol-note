import { IFormatedProfile, IUserProfiles } from "@/lib/types/types";

export const formatUserProfile = (data: IUserProfiles): IFormatedProfile => {
  if (!data) {
    return {
      createdAt: "",
      userAchievement: "",
      userAvatar: "",
      userDescription:
        "Войдите или Зарегистрируйтесь, чтоб просматривать информацию",
      userId: "",
      userName: "Неизвестный пользователь",
      userRank: "",
    };
  } else {
    return {
      createdAt: data.created_at,
      userAchievement: data.user_achievement,
      userAvatar: data.user_avatar,
      userDescription: data.user_description,
      userId: data.user_id,
      userName: data.user_name,
      userRank: data.user_rank,
    };
  }
};

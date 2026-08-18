export type TButtonVariant =
  "primary" | "secondary" | "outline" | "ghost" | "icon";

export interface IFormatedChampion {
  id: string;
  name: string;
  image: {
    full: string;
  };
}

export interface IFormatedProfile {
  createdAt: string;
  userAchievement: string;
  userAvatar: string;
  userDescription: string;
  userId: string;
  userName: string;
  userRank: string;
}

export interface IChampionsResponse {
  data: IChampion[];
}

export interface IChampion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
}

export type TMatchup = {
  id?: number;
  playerChampion: IFormatedChampion[];
  enemyChampion: IFormatedChampion[];
  role: string;
  note: string;
};

export interface IUserProfiles {
  created_at: string;
  user_achievement: string;
  user_avatar: string;
  user_description: string;
  user_id: string;
  user_name: string;
  user_rank: string;
}

export interface IUserNoteResponse {
  id: number;
  user_id: string;
  created_at: string;
  note: string;
  player_champions: IFormatedChampion | IFormatedChampion[];
  enemy_champions: IFormatedChampion | IFormatedChampion[];
  role: string;
}

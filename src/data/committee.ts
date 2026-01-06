export type CommitteeRole =
  | "chair"
  | "treasurer"
  | "acquisition"
  | "speakers"
  | "location"
  | "promotion"
  | "board";

export interface CommitteeMember {
  name: string;
  role: CommitteeRole;
  linkedin?: string;
}

export const ROLE_ORDER: CommitteeRole[] = [
  "chair",
  "treasurer",
  "acquisition",
  "speakers",
  "location",
  "promotion",
  "board",
];

export const committee: CommitteeMember[] = [
  { name: "Sem van Nieuwenhuizen", role: "chair", linkedin: "" },

  { name: "Marcel van Laar", role: "treasurer", linkedin: "" },

  { name: "Thijs Olijerhoek", role: "acquisition", linkedin: "" },
  { name: "Willem Haans", role: "acquisition", linkedin: "" },

  { name: "Robert Karzijn", role: "speakers", linkedin: "" },
  { name: "Joshua Oudshorn", role: "speakers", linkedin: "" },

  { name: "Tieeny Chao", role: "location", linkedin: "" },

  { name: "Thom Bongaards", role: "promotion", linkedin: "" },
  
  { name: "Joep Swinkels", role: "board", linkedin: "" },
];

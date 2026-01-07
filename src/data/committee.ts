export type CommitteeRole =
  | "chair"
  | "treasurer"
  | "acquisition"
  | "speakers"
  | "location"
  | "promotion"
  | "internal affairs";

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
  "internal affairs",
];

export const committee: CommitteeMember[] = [
  { name: "Sem van Nieuwenhuizen", role: "chair", linkedin: "https://www.linkedin.com/in/leuke-naam/" },

  { name: "Marcel van Laar", role: "treasurer", linkedin: "https://www.linkedin.com/in/marcel-van-laar-b071b7258/" },

  { name: "Thijs Olijerhoek", role: "acquisition", linkedin: "https://www.linkedin.com/in/thijs-olijerhoek-a4b203236/" },
  { name: "Willem Haans", role: "acquisition", linkedin: "https://www.linkedin.com/in/whaans/" },

  { name: "Robert Karzijn", role: "speakers", linkedin: "https://www.linkedin.com/in/robert-karzijn-260696279/" },
  { name: "Joshua Oudshorn", role: "speakers", linkedin: "https://www.linkedin.com/in/joshua-oudshoorn-5a8abb293/" },

  { name: "Tieeny Chao", role: "location", linkedin: "https://www.linkedin.com/in/tieeny-chao-5642b5251/" },

  { name: "Thom Bongaards", role: "promotion", linkedin: "https://www.linkedin.com/in/thombongaards/" },
  
  { name: "Joep Swinkels", role: "internal affairs", linkedin: "https://www.linkedin.com/in/joep-swinkels/" },
];

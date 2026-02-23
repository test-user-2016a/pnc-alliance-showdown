export interface Quest {
  id: string;
  quest: string;
  requirement: string | number;
  points: number;
  time: string | null;
  type: QuestType;
}

export type QuestType =
  | "arena"
  | "market"
  | "alliance"
  | "ap"
  | "diamond"
  | "stamina"
  | "gather"
  | "gear"
  | "hero"
  | "heal"
  | "help"
  | "building"
  | "research"
  | "troop"
  | "rally"
  | "speedup"
  | "transport"
  | "packs"
  | "other";

import { Quest } from "@shared/api";

const rawQuests: Quest[] = [
  { id: "1", quest: "Arena Challenge", requirement: 2, points: 60, time: null, type: "arena", note: "Challenge other players in the Arena. Winning is not required, only completion." },
  { id: "2", quest: "Arena Challenge", requirement: 5, points: 78, time: null, type: "arena", note: "Best performed during the Arena event for double rewards." },
  { id: "3", quest: "Arena Challenge", requirement: 10, points: 115, time: null, type: "arena" },
  { id: "4", quest: "Arena Challenge", requirement: 12, points: 133, time: null, type: "arena" },
  { id: "5", quest: "Black Market", requirement: 8, points: 122, time: null, type: "market", note: "Purchase items from the Black Market. Focus on resources or speedups you need." },
  { id: "6", quest: "Black Market", requirement: 12, points: 100, time: null, type: "market" },
  { id: "7", quest: "Black Market", requirement: 16, points: 175, time: null, type: "market" },
  { id: "8", quest: "Black Market", requirement: 32, points: 175, time: null, type: "market" },
  { id: "9", quest: "Consume Alliance Coins", requirement: "40,000", points: 83, time: null, type: "alliance" },
  { id: "10", quest: "Consume Alliance Coins", requirement: "200,000", points: 98, time: null, type: "alliance" },
  { id: "11", quest: "Consume Alliance Coins", requirement: "400,000", points: 121, time: null, type: "alliance" },
  { id: "12", quest: "Consume Alliance Coins", requirement: "800,000", points: 166, time: null, type: "alliance" },
  { id: "13", quest: "Consume AP", requirement: 450, points: 73, time: null, type: "ap", note: "Use AP to attack monsters on the map. It's best to hunt monsters that provide materials you need for progression." },
  { id: "14", quest: "Consume AP", requirement: 900, points: 100, time: null, type: "ap", note: "Consider using AP potions if you're close to completion but running out of natural recovery." },
  { id: "15", quest: "Consume AP", requirement: 1500, points: 134, time: null, type: "ap" },
  { id: "16", quest: "Consume Diamond", requirement: "3,000", points: 101, time: null, type: "diamond" },
  { id: "17", quest: "Consume Diamond", requirement: "12,000", points: 114, time: null, type: "diamond" },
  { id: "18", quest: "Consume Diamond", requirement: "25,000", points: 132, time: null, type: "diamond" },
  { id: "19", quest: "Consume Diamond", requirement: "50,000", points: 169, time: null, type: "diamond" },
  { id: "20", quest: "Consume Stamina", requirement: 375, points: 84, time: null, type: "stamina" },
  { id: "21", quest: "Consume Stamina", requirement: 375, points: 118, time: null, type: "stamina" },
  { id: "22", quest: "Consume Stamina", requirement: 625, points: 104, time: null, type: "stamina" },
  { id: "23", quest: "Consume Stamina", requirement: 1000, points: 136, time: null, type: "stamina" },
  { id: "24", quest: "Gather Food", requirement: "1,200,000", points: 67, time: null, type: "gather" },
  { id: "25", quest: "Gather Food", requirement: "2,400,000", points: 82, time: null, type: "gather" },
  { id: "26", quest: "Gather Food", requirement: "4,800,000", points: 113, time: null, type: "gather" },
  { id: "27", quest: "Gather Food", requirement: "7,200,000", points: 143, time: "3 days", type: "gather" },
  { id: "28", quest: "Gather Food", requirement: "7,200,000", points: 172, time: "33 hours", type: "gather" },
  { id: "29", quest: "Gather Iron", requirement: "60,000", points: 67, time: null, type: "gather" },
  { id: "30", quest: "Gather Iron", requirement: "120,000", points: 82, time: null, type: "gather" },
  { id: "31", quest: "Gather Iron", requirement: "240,000", points: 113, time: null, type: "gather" },
  { id: "32", quest: "Gather Iron", requirement: "360,000", points: 143, time: "3 days", type: "gather" },
  { id: "33", quest: "Gather Iron", requirement: "360,000", points: 172, time: "33 hours", type: "gather" },
  { id: "34", quest: "Gather Stone", requirement: "240,000", points: 67, time: null, type: "gather" },
  { id: "35", quest: "Gather Stone", requirement: "480,000", points: 82, time: null, type: "gather" },
  { id: "36", quest: "Gather Stone", requirement: "960,000", points: 113, time: null, type: "gather" },
  { id: "37", quest: "Gather Stone", requirement: "1,440,000", points: 143, time: "3 days", type: "gather" },
  { id: "38", quest: "Gather Stone", requirement: "1,440,000", points: 172, time: "33 hours", type: "gather" },
  { id: "39", quest: "Gather Wood", requirement: "1,200,000", points: 67, time: null, type: "gather" },
  { id: "40", quest: "Gather Wood", requirement: "2,400,000", points: 82, time: null, type: "gather" },
  { id: "41", quest: "Gather Wood", requirement: "4,800,000", points: 113, time: null, type: "gather" },
  { id: "42", quest: "Gather Wood", requirement: "7,200,000", points: 143, time: "3 days", type: "gather" },
  { id: "43", quest: "Gather Wood", requirement: "7,200,000", points: 172, time: "33 hours", type: "gather" },
  { id: "44", quest: "Get Gear Materials", requirement: "200,000", points: 80, time: null, type: "gear" },
  { id: "45", quest: "Get Gear Materials", requirement: "400,000", points: 113, time: null, type: "gear" },
  { id: "46", quest: "Get Gear Materials", requirement: "800,000", points: 176, time: null, type: "gear" },
  { id: "47", quest: "Get Hero Shard", requirement: "120,000", points: 120, time: null, type: "hero" },
  { id: "48", quest: "Get Hero Shard", requirement: "240,000", points: 113, time: null, type: "hero" },
  { id: "49", quest: "Get Hero Shard", requirement: "480,000", points: 176, time: null, type: "hero" },
  { id: "50", quest: "Heal Units", requirement: "15,000", points: 53, time: null, type: "heal", note: "Heal wounded troops in the infirmary. You can battle low-level monsters to intentionally create minor casualties if needed." },
  { id: "51", quest: "Heal Units", requirement: "60,000", points: 67, time: null, type: "heal" },
  { id: "52", quest: "Heal Units", requirement: "120,000", points: 86, time: null, type: "heal" },
  { id: "53", quest: "Heal Units", requirement: "240,000", points: 124, time: null, type: "heal" },
  { id: "54", quest: "Help Allies", requirement: 35, points: 85, time: null, type: "help" },
  { id: "55", quest: "Help Allies", requirement: 55, points: 109, time: null, type: "help" },
  { id: "56", quest: "Help Allies", requirement: 100, points: 164, time: null, type: "help" },
  { id: "57", quest: "Improve Building Power", requirement: "60,000", points: 120, time: null, type: "building" },
  { id: "58", quest: "Improve Building Power", requirement: "120,000", points: 113, time: null, type: "building" },
  { id: "59", quest: "Improve Building Power", requirement: "240,000", points: 176, time: null, type: "building" },
  { id: "60", quest: "Improve Research Power", requirement: "200,000", points: 80, time: null, type: "research" },
  { id: "61", quest: "Improve Research Power", requirement: "400,000", points: 113, time: null, type: "research" },
  { id: "62", quest: "Improve Research Power", requirement: "800,000", points: 176, time: null, type: "research" },
  { id: "63", quest: "Improve Troop Power", requirement: "600,000", points: 80, time: null, type: "troop" },
  { id: "64", quest: "Improve Troop Power", requirement: "1,200,000", points: 113, time: null, type: "troop" },
  { id: "65", quest: "Improve Troop Power", requirement: "2,400,000", points: 176, time: null, type: "troop" },
  { id: "66", quest: "Rally on Monster Dens", requirement: 1, points: 76, time: null, type: "rally" },
  { id: "67", quest: "Rally on Monster Dens", requirement: 2, points: 97, time: null, type: "rally" },
  { id: "68", quest: "Rally on Monster Dens", requirement: 4, points: 140, time: null, type: "rally" },
  { id: "69", quest: "Rally on Monster Dens", requirement: 6, points: 184, time: null, type: "rally" },
  { id: "70", quest: "Research", requirement: 4, points: 68, time: null, type: "research" },
  { id: "71", quest: "Research", requirement: 6, points: 94, time: null, type: "research" },
  { id: "72", quest: "Research", requirement: 8, points: 119, time: null, type: "research" },
  { id: "73", quest: "Speedups (Build/Tech/Training/Healing)", requirement: "60h", points: 78, time: null, type: "speedup" },
  { id: "74", quest: "Speedups (Build/Tech/Training/Healing)", requirement: "200h", points: 121, time: null, type: "speedup" },
  { id: "75", quest: "Speedups (Build/Tech/Training/Healing)", requirement: "320h", points: 157, time: null, type: "speedup" },
  { id: "76", quest: "Transport Resources to Allies", requirement: "12,000,000", points: 63, time: null, type: "transport" },
  { id: "77", quest: "Transport Resources to Allies", requirement: "24,000,000", points: 87, time: null, type: "transport" },
  { id: "78", quest: "Transport Resources to Allies", requirement: "36,000,000", points: 110, time: null, type: "transport" },
  { id: "79", quest: "Buy Packs", requirement: 15, points: 240, time: null, type: "packs", note: "High-value quest. This is a personal quest that requires actual purchases in the game store." },
  { id: "80", quest: "Consume Diamond", requirement: "200,000", points: 240, time: null, type: "diamond", note: "Perfect for large upgrades or during diamond spending events." },
  { id: "81", quest: "Gain Diamonds via Packs", requirement: "18,000", points: 240, time: null, type: "packs" },
  { id: "82", quest: "Get Hero Shard", requirement: "1,000,000", points: 240, time: null, type: "hero" },
  { id: "83", quest: "Improve Research Power", requirement: "1,100,000", points: 240, time: null, type: "research" },
  { id: "84", quest: "Improve Troop Power", requirement: "3,250,000", points: 240, time: null, type: "troop", note: "One of the most efficient high-point quests. Save your troop training speedups for this specific quest." },
  { id: "85", quest: "Speedup (Build/Tech/Training/Healing)", requirement: "480h", points: 240, time: null, type: "speedup" },
];

export const quests: Quest[] = rawQuests.map(q => {
  let recommendation: Quest["recommendation"] = "neutral";

  // Not Recommended
  if (
    (q.type === "research" && q.quest.includes("Improve Research Power")) ||
    q.type === "building" ||
    q.type === "transport" ||
    q.type === "stamina" ||
    q.type === "troop"
  ) {
    recommendation = "not_recommended";
  }
  // Recommended
  else if (
    (q.type === "arena" && q.points > 78) ||
    q.type === "alliance" ||
    q.type === "help" ||
    q.type === "market" ||
    q.type === "rally" ||
    q.type === "speedup" ||
    (q.quest === "Research" && (q.requirement === 4 || q.requirement === 6 || q.requirement === 8))
  ) {
    recommendation = "recommended";
  }

  return { ...q, recommendation };
});

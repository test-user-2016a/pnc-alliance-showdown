import * as React from "react";
import { Quest } from "@shared/api";
import {
  Trophy,
  ShoppingCart,
  Users,
  Zap,
  Diamond,
  Flame,
  Pickaxe,
  Shield,
  User,
  Heart,
  HandHelping,
  Hammer,
  FlaskConical,
  Sword,
  Compass,
  Clock,
  Truck,
  Package,
  HelpCircle,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";

export const typeIcons: Record<string, any> = {
  arena: Trophy,
  market: ShoppingCart,
  alliance: Users,
  ap: Zap,
  diamond: Diamond,
  stamina: Flame,
  gather: Pickaxe,
  gear: Shield,
  hero: User,
  heal: Heart,
  help: HandHelping,
  building: Hammer,
  research: FlaskConical,
  troop: Sword,
  rally: Compass,
  speedup: Clock,
  transport: Truck,
  packs: Package,
};

// Quest type to color mapping
export const typeColors: Record<string, { bg: string, text: string, border: string, glow: string }> = {
  arena: { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30", glow: "bg-amber-500/20" },
  rally: { bg: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30", glow: "bg-rose-500/20" },
  troop: { bg: "bg-slate-400/10", text: "text-slate-400", border: "border-slate-400/30", glow: "bg-slate-400/20" },
  gather: { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30", glow: "bg-emerald-500/20" },
  transport: { bg: "bg-teal-500/10", text: "text-teal-500", border: "border-teal-500/30", glow: "bg-teal-500/20" },
  building: { bg: "bg-orange-600/10", text: "text-orange-600", border: "border-orange-600/30", glow: "bg-orange-600/20" },
  research: { bg: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/30", glow: "bg-indigo-500/20" },
  gear: { bg: "bg-sky-500/10", text: "text-sky-500", border: "border-sky-500/30", glow: "bg-sky-500/20" },
  alliance: { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/30", glow: "bg-cyan-500/20" },
  help: { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30", glow: "bg-blue-500/20" },
  diamond: { bg: "bg-sky-400/10", text: "text-sky-400", border: "border-sky-400/30", glow: "bg-sky-400/20" },
  market: { bg: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/30", glow: "bg-violet-500/20" },
  packs: { bg: "bg-fuchsia-500/10", text: "text-fuchsia-500", border: "border-fuchsia-500/30", glow: "bg-fuchsia-500/20" },
  ap: { bg: "bg-yellow-500/10", text: "text-yellow-500", border: "border-yellow-500/30", glow: "bg-yellow-500/20" },
  stamina: { bg: "bg-red-500/10", text: "text-red-500", border: "border-red-500/30", glow: "bg-red-500/20" },
  speedup: { bg: "bg-purple-500/10", text: "text-purple-500", border: "border-purple-500/30", glow: "bg-purple-500/20" },
  heal: { bg: "bg-green-500/10", text: "text-green-500", border: "border-green-500/30", glow: "bg-green-500/20" },
  hero: { bg: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30", glow: "bg-pink-500/20" },
  other: { bg: "bg-zinc-500/10", text: "text-zinc-500", border: "border-zinc-500/30", glow: "bg-zinc-500/20" },
};

interface QuestCardProps {
  quest: Quest;
  onClick: (quest: Quest) => void;
}

export function QuestCard({ quest, onClick }: QuestCardProps) {
  const { t } = useTranslation();
  const Icon = typeIcons[quest.type] || HelpCircle;
  const isHighValue = quest.points >= 240;

  // Dynamic color based on quest type
  const questColors = typeColors[quest.type] || typeColors.other;

  return (
    <div
      onClick={() => onClick(quest)}
      className={cn(
        "group cursor-pointer relative overflow-hidden rounded-xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10",
        isHighValue ? "border-primary/50 bg-gradient-to-br from-card to-primary/5" : cn("border-border", questColors.border)
      )}
    >
      {/* Background Glow */}
      <div className={cn(
        "absolute -right-4 -top-4 h-24 w-24 rounded-full blur-3xl transition-opacity group-hover:opacity-100",
        isHighValue ? "bg-primary/20 opacity-50" : cn(questColors.glow, "opacity-0")
      )} />

      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset ring-white/10 shadow-sm transition-transform group-hover:scale-110 duration-300",
            isHighValue ? "bg-secondary text-primary" : cn(questColors.bg, questColors.text)
          )}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className={cn(
              "text-lg font-black uppercase tracking-widest leading-tight",
              isHighValue ? "text-primary" : questColors.text
            )}>
              {quest.points} {t.card.points}
            </span>
            {quest.recommendation && quest.recommendation !== "neutral" && (
              <div className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-widest ring-1 ring-inset transition-all group-hover:scale-105",
                quest.recommendation === "recommended"
                  ? "bg-emerald-500/20 text-emerald-400 ring-emerald-500/30 border border-emerald-500/40"
                  : "bg-rose-500/20 text-rose-400 ring-rose-500/30 border border-rose-500/40"
              )}>
                <span>
                  {quest.recommendation === "recommended"
                    ? t.recommendation.recommended
                    : t.recommendation.not_recommended}
                </span>
              </div>
            )}
            <span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground font-bold uppercase tracking-wider">
              <Clock className="h-3.5 w-3.5" />
              {quest.time || t.card.noTime}
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-bold leading-tight text-foreground group-hover:text-primary transition-colors mb-1">
            {t.questNames[quest.quest] || quest.quest}
          </h3>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">{t.card.requirement}</span>
            <p className="text-sm font-bold text-foreground/90">
              {typeof quest.requirement === 'number' ? quest.requirement.toLocaleString() : quest.requirement}
            </p>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-bold ring-1 ring-inset ring-white/5 uppercase tracking-widest",
            isHighValue ? "bg-secondary text-primary" : cn(questColors.bg, questColors.text)
          )}>
            {t.types[quest.type] || quest.type}
          </span>
          <div className={cn(
            "h-1.5 w-1.5 rounded-full animate-pulse",
            isHighValue ? "bg-primary/40" : cn(questColors.text, "opacity-40")
          )} />
        </div>
      </div>
    </div>
  );
}

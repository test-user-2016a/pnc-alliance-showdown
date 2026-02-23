import { Quest } from "@shared/api";
import { 
  Trophy, ShoppingCart, Users, Zap, Diamond, Flame, 
  Pickaxe, Shield, User, Heart, HandHelping, Hammer, 
  FlaskConical, Sword, Compass, Timer, Truck, Package,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const typeIcons: Record<string, any> = {
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
  speedup: Timer,
  transport: Truck,
  packs: Package,
};

interface QuestCardProps {
  quest: Quest;
}

export function QuestCard({ quest }: QuestCardProps) {
  const Icon = typeIcons[quest.type] || HelpCircle;
  
  const isHighValue = quest.points >= 200;

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10",
      isHighValue ? "border-primary/50 bg-gradient-to-br from-card to-primary/5" : "border-border"
    )}>
      {/* Background Glow */}
      <div className={cn(
        "absolute -right-4 -top-4 h-24 w-24 rounded-full blur-3xl transition-opacity group-hover:opacity-100",
        isHighValue ? "bg-primary/20 opacity-50" : "bg-blue-500/10 opacity-0"
      )} />

      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary ring-1 ring-inset ring-white/10">
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex flex-col items-end">
            <span className={cn(
              "text-xs font-bold uppercase tracking-wider",
              isHighValue ? "text-primary" : "text-muted-foreground"
            )}>
              {quest.points} Points
            </span>
            <span className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
              <Timer className="h-3 w-3" />
              {quest.time || "— No time limit"}
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-bold leading-tight text-foreground group-hover:text-primary transition-colors mb-1">
            {quest.quest}
          </h3>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Requirement</span>
            <p className="text-sm font-semibold text-foreground/80">
              {typeof quest.requirement === 'number' ? quest.requirement.toLocaleString() : quest.requirement}
            </p>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground ring-1 ring-inset ring-white/5 uppercase tracking-tighter">
            {quest.type}
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

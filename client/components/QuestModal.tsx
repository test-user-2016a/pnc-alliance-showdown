import * as React from "react";
import { Quest } from "@shared/api";
import { 
  HelpCircle, 
  Clock, 
  Info
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";
import { typeIcons, typeColors } from "./QuestCard";

interface QuestModalProps {
  quest: Quest | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuestModal({ quest, isOpen, onClose }: QuestModalProps) {
  const { t } = useTranslation();
  if (!quest) return null;

  const Icon = typeIcons[quest.type] || HelpCircle;
  const isHighValue = quest.points >= 240;
  const questColors = typeColors[quest.type] || typeColors.other;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] border-border bg-card shadow-2xl overflow-hidden p-0">
        <div className={cn(
          "absolute top-0 left-0 w-full h-2 transition-all",
          isHighValue ? "bg-primary" : cn(questColors.bg.replace("bg-", "").replace("/10", ""), "bg-current opacity-30")
        )} style={{ backgroundColor: !isHighValue ? questColors.text.replace("text-", "") : undefined }} />

        <DialogTitle className="sr-only">
          {t.questNames[quest.quest] || quest.quest}
        </DialogTitle>
        <div className="px-6 pt-8 pb-4 text-left sm:text-left">
          <div className="flex items-center gap-4 mb-2">
            <div className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-inset ring-white/10 shadow-lg",
              isHighValue ? "bg-secondary text-primary" : cn(questColors.bg, questColors.text)
            )}>
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-1">
                {t.questNames[quest.quest] || quest.quest}
              </h2>
              <span className={cn(
                "text-xs font-black uppercase tracking-widest",
                isHighValue ? "text-primary" : questColors.text
              )}>
                {t.types[quest.type] || quest.type}
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-secondary/30 border border-border/50 p-4">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">{t.card.requirement}</span>
              <p className="text-lg font-bold text-foreground">
                {typeof quest.requirement === 'number' ? quest.requirement.toLocaleString() : quest.requirement}
              </p>
            </div>
            <div className="rounded-xl bg-secondary/30 border border-border/50 p-4">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">{t.modal.reward}</span>
              <p className={cn(
                "text-lg font-bold",
                isHighValue ? "text-primary" : questColors.text
              )}>
                {quest.points} {t.card.points}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-secondary/30 border border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t.modal.timeLimit}</span>
            </div>
            <p className="text-lg font-bold text-foreground">
              {quest.time || t.card.noTime}
            </p>
          </div>

          <div className={cn(
            "rounded-xl border p-4",
            isHighValue ? "bg-primary/5 border-primary/20" : cn(questColors.bg, "border-current opacity-100")
          )} style={{ borderColor: !isHighValue ? `rgba(var(--${questColors.text.replace('text-', '')}), 0.2)` : undefined }}>
            <div className={cn(
              "flex items-center gap-2 mb-2",
              isHighValue ? "text-primary" : questColors.text
            )}>
              <Info className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{t.modal.tip}</span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/90 italic font-medium whitespace-pre-line">
              {quest.type === "gather" ? t.tips.gatherQuest : (quest.note || t.modal.noTip)}
            </p>
          </div>
        </div>

        <div className="bg-secondary/20 px-6 py-4 flex justify-end mt-4">
          <DialogClose asChild>
            <button className={cn(
              "px-4 py-2 text-sm font-bold rounded-lg transition-colors",
              isHighValue ? "bg-primary text-primary-foreground hover:bg-primary/90" : cn(questColors.bg.replace('/10', '/30'), questColors.text, "hover:bg-opacity-40")
            )}>
              {t.modal.close}
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

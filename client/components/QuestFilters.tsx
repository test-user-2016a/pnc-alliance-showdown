import { QuestType } from "@shared/api";
import { Search, Filter, SortDesc, SortAsc } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface QuestFiltersProps {
  onSearchChange: (value: string) => void;
  onTypeChange: (value: QuestType | "all") => void;
  onSortChange: (value: string) => void;
  onSortOrderChange: () => void;
  sortOrder: "asc" | "desc";
  types: QuestType[];
}

export function QuestFilters({ 
  onSearchChange, 
  onTypeChange, 
  onSortChange, 
  onSortOrderChange,
  sortOrder,
  types 
}: QuestFiltersProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8 p-4 rounded-2xl bg-secondary/50 border border-border/50 backdrop-blur-sm">
      <div className="relative flex-1 group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input 
          placeholder="Search quests..." 
          className="pl-10 bg-secondary/50 border-none focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 transition-all focus-visible:bg-secondary"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-card/50 ring-1 ring-white/5">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select onValueChange={(val) => onTypeChange(val as any)}>
            <SelectTrigger className="w-[140px] border-none bg-transparent focus:ring-0 focus:ring-offset-0 h-8 text-xs font-semibold uppercase tracking-wider">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent align="end" className="bg-card border-border">
              <SelectItem value="all">All Types</SelectItem>
              {types.sort().map((type) => (
                <SelectItem key={type} value={type} className="capitalize">{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-card/50 ring-1 ring-white/5">
          <SortDesc className="h-4 w-4 text-muted-foreground" />
          <Select onValueChange={onSortChange}>
            <SelectTrigger className="w-[140px] border-none bg-transparent focus:ring-0 focus:ring-offset-0 h-8 text-xs font-semibold uppercase tracking-wider">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent align="end" className="bg-card border-border">
              <SelectItem value="quest">Quest Name</SelectItem>
              <SelectItem value="type">Quest Type</SelectItem>
              <SelectItem value="points">Points</SelectItem>
              <SelectItem value="time">Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          variant="secondary" 
          size="icon" 
          className="h-10 w-10 bg-card/50 hover:bg-secondary/50 border-none ring-1 ring-white/5"
          onClick={onSortOrderChange}
        >
          {sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}

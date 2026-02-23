import { useState, useMemo } from "react";
import { quests as initialQuests } from "@/data/quests";
import { QuestCard } from "@/components/QuestCard";
import { QuestFilters } from "@/components/QuestFilters";
import { Quest, QuestType } from "@shared/api";
import { Trophy, LayoutGrid, ListFilter, LayoutDashboard, Search } from "lucide-react";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<QuestType | "all">("all");
  const [sortBy, setSortBy] = useState<string>("points");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredAndSortedQuests = useMemo(() => {
    return initialQuests
      .filter((quest) => {
        const matchesSearch = quest.quest.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === "all" || quest.type === selectedType;
        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        let comparison = 0;
        if (sortBy === "quest") {
          comparison = a.quest.localeCompare(b.quest);
        } else if (sortBy === "type") {
          comparison = a.type.localeCompare(b.type);
        } else if (sortBy === "points") {
          comparison = a.points - b.points;
        } else if (sortBy === "time") {
          const timeA = a.time || "";
          const timeB = b.time || "";
          comparison = timeA.localeCompare(timeB);
        }

        return sortOrder === "asc" ? comparison : -comparison;
      });
  }, [searchQuery, selectedType, sortBy, sortOrder]);

  const uniqueTypes = useMemo(() => {
    return Array.from(new Set(initialQuests.map((q) => q.type)));
  }, []);

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none tracking-tight">Alliance Showdown</h1>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Puzzles & Chaos</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-4 text-sm font-medium">
              <a href="#" className="flex items-center gap-2 text-primary transition-colors">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Planner</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Stats</a>
            </nav>
            <div className="h-4 w-px bg-border" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary ring-2 ring-white/10">
              <span className="text-[10px] font-bold">JD</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container pt-8">
        {/* Welcome Section */}
        <div className="mb-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary ring-1 ring-inset ring-primary/20 mb-4">
            <ListFilter className="h-3 w-3" />
            Quest Optimization Engine v1.0
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Quest Data Dashboard</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            Visualize, sort, and filter every alliance showdown quest with ease. Maximize your rewards and efficiency with real-time data analysis.
          </p>
        </div>

        {/* Filters */}
        <QuestFilters 
          onSearchChange={setSearchQuery}
          onTypeChange={setSelectedType}
          onSortChange={setSortBy}
          onSortOrderChange={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
          sortOrder={sortOrder}
          types={uniqueTypes}
        />

        {/* Grid Stats */}
        <div className="mb-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <LayoutGrid className="h-4 w-4" />
              Showing {filteredAndSortedQuests.length} Quests
            </span>
          </div>
          <div className="flex items-center gap-2 font-semibold text-primary uppercase tracking-tighter text-xs">
            Sorting by {sortBy} ({sortOrder})
          </div>
        </div>

        {/* Quest Grid */}
        {filteredAndSortedQuests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedQuests.map((quest) => (
              <QuestCard key={quest.id} quest={quest} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-border/50 bg-secondary/20">
            <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Search className="h-10 w-10 text-muted-foreground/30" />
            </div>
            <h3 className="text-xl font-bold">No quests found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or search query.</p>
          </div>
        )}
      </main>

      {/* Footer / Mobile Nav */}
      <footer className="mt-20 border-t border-border/40 py-10 bg-secondary/20">
        <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Alliance Showdown Tracker. Not affiliated with Puzzles & Chaos.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import GameCard from "./components/GameCard";
import GamePlayer from "./components/GamePlayer";
import gamesData from "./data/games.json";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = ["All", "Classic", "Puzzle", "Arcade", "Action", "Sports"];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeGame, setActiveGame] = useState(null);

  const filteredGames = useMemo(() => {
    return gamesData.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex-1 grid grid-cols-[240px_1fr] h-[calc(100vh-70px)] overflow-hidden">
        {/* Sidebar */}
        <aside className="sidebar-bg p-[30px] overflow-y-auto hidden md:block">
          <div className="mb-[40px]">
            <span className="text-[11px] uppercase tracking-[1px] text-muted-foreground mb-[20px] block font-semibold">
              Genres
            </span>
            <div className="flex flex-col gap-1">
              {CATEGORIES.map((category) => (
                <div
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-[10px] flex items-center gap-[12px] text-[14px] cursor-pointer transition-all ${
                    selectedCategory === category
                      ? "text-primary opacity-100"
                      : "text-foreground opacity-80 hover:opacity-100 hover:text-primary"
                  }`}
                >
                  {category}
                  {category === "Action" && (
                    <span className="text-[10px] bg-primary/10 text-primary px-[6px] py-[2px] rounded-[4px] ml-auto">
                      New
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-[40px]">
            <span className="text-[11px] uppercase tracking-[1px] text-muted-foreground mb-[20px] block font-semibold">
              Platform
            </span>
            <div className="flex flex-col gap-1">
              <div className="py-[10px] flex items-center gap-[12px] text-[14px] cursor-pointer opacity-80 hover:opacity-100 hover:text-primary">
                HTML5
              </div>
              <div className="py-[10px] flex items-center gap-[12px] text-[14px] cursor-pointer opacity-80 hover:opacity-100 hover:text-primary">
                WebGL
              </div>
              <div className="py-[10px] flex items-center gap-[12px] text-[14px] cursor-pointer opacity-80 hover:opacity-100 hover:text-primary">
                Emulator
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="p-[30px_40px] overflow-y-auto">
          <div className="flex justify-between items-center mb-[24px]">
            <h2 className="text-[20px] font-semibold text-white">
              {selectedCategory === "All" ? "Featured Games" : `${selectedCategory} Games`}
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search unblocked titles..."
                className="bg-secondary border border-white/10 p-[8px_16px] rounded-[8px] text-[13px] text-muted-foreground w-[240px] focus:outline-none focus:border-primary/50 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onPlay={setActiveGame}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredGames.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 rounded-full bg-white/5 p-6">
                <span className="text-4xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold text-white">No games found</h3>
              <p className="mt-2 text-muted-foreground">
                Try searching for something else or change the category.
              </p>
            </div>
          )}
        </main>
      </div>

      <GamePlayer
        game={activeGame}
        isOpen={!!activeGame}
        onClose={() => setActiveGame(null)}
      />
    </div>
  );
}

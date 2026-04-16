import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <header className="sticky top-0 z-50 flex h-[70px] w-full items-center justify-between px-10 glass-header">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold tracking-tighter text-primary uppercase">
          NEON ARCADE
        </span>
      </div>

      <nav className="hidden md:block">
        <ul className="flex list-none gap-[30px]">
          <li className="cursor-pointer text-sm font-medium text-primary">Home</li>
          <li className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Library</li>
          <li className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Leaderboards</li>
          <li className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Support</li>
        </ul>
      </nav>

      <div className="flex items-center gap-[15px]">
        <span className="hidden text-[12px] text-muted-foreground lg:block">
          2,401 Players Online
        </span>
        <div className="h-[6px] w-[6px] rounded-full bg-primary accent-glow" />
      </div>
    </header>
  );
}

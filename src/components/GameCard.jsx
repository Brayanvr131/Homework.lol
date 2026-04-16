import { motion } from "motion/react";

export default function GameCard({ game, onPlay }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <div 
        className="game-card-bg rounded-[12px] overflow-hidden flex flex-col transition-transform cursor-pointer"
        onClick={() => onPlay(game)}
      >
        <div className="relative w-full h-[140px] overflow-hidden">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
            <div className="play-overlay accent-glow">
              PLAY
            </div>
          </div>
        </div>
        <div className="p-[15px]">
          <span className="text-[14px] font-semibold text-white block mb-[4px] group-hover:text-primary transition-colors">
            {game.title}
          </span>
          <span className="text-[12px] text-muted-foreground">
            {game.category} • 4.8 Rating
          </span>
        </div>
      </div>
    </motion.div>
  );
}

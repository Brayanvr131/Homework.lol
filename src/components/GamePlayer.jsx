import { Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GamePlayer({ game, isOpen, onClose }) {
  if (!game) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-[#0f172a] border border-white/10 shadow-2xl"
          >
            <div className="flex h-14 items-center justify-between bg-black/40 px-6 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white font-display uppercase tracking-tight">
                {game.title}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  onClick={() => window.open(game.iframeUrl, "_blank")}
                >
                  <Maximize2 size={18} />
                </button>
                <button
                  className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  onClick={onClose}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={game.iframeUrl}
                className="h-full w-full border-none"
                title={game.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

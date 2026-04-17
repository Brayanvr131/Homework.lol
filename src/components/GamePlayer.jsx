import { Maximize2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";

export default function GamePlayer({ game, isOpen, onClose }) {
  if (!game) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl border-white/10 bg-background p-0 overflow-hidden">
        <DialogHeader className="absolute top-0 left-0 right-0 z-10 flex flex-row items-center justify-between bg-black/60 p-4 backdrop-blur-md">
          <DialogTitle className="font-display text-xl font-bold text-white">
            {game.title}
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20"
              onClick={() => window.open(game.iframeUrl, "_blank")}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className="aspect-video w-full pt-16">
          <iframe
            src={game.iframeUrl}
            className="h-full w-full border-none"
            title={game.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

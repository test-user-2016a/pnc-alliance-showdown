import * as React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoSlide {
  image: string;
  text: string;
}

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: InfoSlide[];
}

export function InfoModal({ isOpen, onClose, slides }: InfoModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (slides.length === 0) return null;

  const slide = slides[currentSlide];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] border-border bg-card shadow-2xl overflow-hidden p-0">
        <DialogTitle className="sr-only">Information</DialogTitle>
        
        <div className="relative w-full bg-secondary/30">
          {/* Image */}
          <div className="aspect-video w-full flex items-center justify-center bg-secondary/50 overflow-hidden">
            <img
              src={slide.image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Counter */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Text Content */}
        <div className="px-6 py-6">
          <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
            {slide.text}
          </p>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 pb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === currentSlide 
                  ? "bg-primary w-8" 
                  : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

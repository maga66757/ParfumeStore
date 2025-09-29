import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-perfumes.jpg";

interface HeroProps {
  onOrderClick: () => void;
  onContactClick: () => void;
}

export const Hero = ({ onOrderClick, onContactClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              Parfumestore
            </h1>
            <div className="h-1 w-24 sm:w-32 mx-auto gradient-gold rounded-full" />
          </div>

          {/* Slogan */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light px-4">
            Оригинальные парфюмы из Германии
          </p>

          {/* USP */}
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto px-4">
            50000+ позиций. Только оригинал. Доставка по всей России
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-8 px-4">
            <Button 
              onClick={onOrderClick}
              size="lg"
              className="w-full sm:w-auto gradient-gold hover:opacity-90 text-primary-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-gold transition-smooth"
            >
              Заказать
            </Button>
            <Button 
              onClick={onContactClick}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-accent/30 hover:border-accent hover:bg-accent/10 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-smooth"
            >
              Связаться
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

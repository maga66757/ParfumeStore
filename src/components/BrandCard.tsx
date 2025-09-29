import { Card } from "@/components/ui/card";

interface BrandCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

export const BrandCard = ({ name, image, onClick }: BrandCardProps) => {
  return (
    <Card 
      onClick={onClick}
      className="group cursor-pointer overflow-hidden shadow-elegant hover:shadow-gold transition-smooth bg-card border-border/50"
    >
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
      <div className="p-3 sm:p-4 md:p-6 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-smooth">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
          Посмотреть каталог
        </p>
      </div>
    </Card>
  );
};

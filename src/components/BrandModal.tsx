import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Perfume {
  name: string;
  price: string;
}

interface BrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
  perfumes: Perfume[];
  onOrder: () => void;
}

export const BrandModal = ({ isOpen, onClose, brandName, perfumes, onOrder }: BrandModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-center">
            {brandName}
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
          {perfumes.map((perfume, index) => (
            <Card key={index} className="p-3 sm:p-4 hover:shadow-gold transition-smooth">
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{perfume.name}</h4>
              <p className="text-accent font-bold text-base sm:text-lg mb-2 sm:mb-3">{perfume.price}</p>
              <Button 
                onClick={onOrder}
                className="w-full gradient-gold hover:opacity-90 transition-smooth text-sm sm:text-base py-2"
              >
                Заказать
              </Button>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

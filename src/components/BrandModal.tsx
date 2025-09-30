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
  onOrder: (perfumeName: string) => void;
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
              <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">{perfume.name}</h4>
              <Button
                onClick={() => onOrder(perfume.name)}
                className="w-full gradient-gold hover:opacity-90 transition-smooth text-sm sm:text-base py-2"
              >
                Узнать цену
              </Button>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

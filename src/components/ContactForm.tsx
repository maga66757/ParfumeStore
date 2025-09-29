import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { PrivacyModal } from "@/components/PrivacyModal";
import { toast } from "sonner";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    perfume: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("Заполните обязательные поля");
      return;
    }

    if (!privacyAccepted) {
      toast.error("Необходимо согласиться с политикой конфиденциальности");
      return;
    }

    setSubmitted(true);
    toast.success("Спасибо, скоро с вами свяжутся!");
    
    setTimeout(() => {
      setFormData({ name: "", phone: "", perfume: "" });
      setSubmitted(false);
      setPrivacyAccepted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto p-6 sm:p-8 md:p-12 text-center shadow-elegant">
        <div className="space-y-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            Спасибо за заявку!
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Скоро с вами свяжутся
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 shadow-elegant">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">ФИО *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Введите ваше ФИО"
            required
            className="border-border/50 focus:border-accent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Телефон *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+7 (___) ___-__-__"
            required
            className="border-border/50 focus:border-accent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="perfume">Желаемый парфюм</Label>
          <Input
            id="perfume"
            value={formData.perfume}
            onChange={(e) => setFormData({ ...formData, perfume: e.target.value })}
            placeholder="Например: Dior Sauvage"
            className="border-border/50 focus:border-accent"
          />
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="privacy"
            checked={privacyAccepted}
            onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
            className="mt-1"
          />
          <div className="text-sm text-muted-foreground">
            <Label htmlFor="privacy" className="cursor-pointer">
              Я согласен с{" "}
              <button
                type="button"
                onClick={() => setShowPrivacyModal(true)}
                className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
              >
                политикой конфиденциальности
              </button>{" "}
              и обработкой персональных данных *
            </Label>
          </div>
        </div>

        <Button 
          type="submit"
          className="w-full gradient-gold hover:opacity-90 text-base sm:text-lg py-5 sm:py-6 shadow-gold transition-smooth"
        >
          Отправить заявку
        </Button>
      </form>

      <PrivacyModal 
        isOpen={showPrivacyModal} 
        onClose={() => setShowPrivacyModal(false)} 
      />
    </Card>
  );
};

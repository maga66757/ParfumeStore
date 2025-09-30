import { MessageCircle, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Social Links */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Свяжитесь с нами
            </h3>
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-accent/30 hover:border-accent hover:bg-accent/10 transition-smooth"
                asChild
              >
                <a
                  href="https://wa.me/79774906005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-accent/30 hover:border-accent hover:bg-accent/10 transition-smooth"
                asChild
              >
                <a
                  href="https://t.me/aromabro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                  <Send className="w-5 h-5" />
                  Telegram
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-accent/30 hover:border-accent hover:bg-accent/10 transition-smooth"
                asChild
              >
                <a
                  href="https://instagram.com/parfu.mestore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
            <p className="text-xs sm:text-sm text-muted-foreground px-4">
              © 2025 Parfumestore. Оригинальные парфюмы из Германии.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

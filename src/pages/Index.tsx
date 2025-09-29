import { useState } from "react";
import { Hero } from "@/components/Hero";
import { BrandCard } from "@/components/BrandCard";
import { BrandModal } from "@/components/BrandModal";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

import brandDior from "@/assets/brand-dior.jpg";
import brandChanel from "@/assets/brand-chanel.jpg";
import brandMontale from "@/assets/brand-montale.jpg";
import brandVersace from "@/assets/brand-versace.jpg";
import brandTomFord from "@/assets/brand-tomford.jpg";

const brands = [
  {
    name: "Dior",
    image: brandDior,
    perfumes: [
      { name: "Dior Sauvage", price: "от 8 500 ₽" },
      { name: "Miss Dior", price: "от 7 900 ₽" },
      { name: "J'adore", price: "от 9 200 ₽" },
      { name: "Fahrenheit", price: "от 7 500 ₽" },
      { name: "Dior Homme", price: "от 8 100 ₽" },
      { name: "Poison", price: "от 7 300 ₽" },
    ],
  },
  {
    name: "Chanel",
    image: brandChanel,
    perfumes: [
      { name: "Chanel №5", price: "от 9 800 ₽" },
      { name: "Coco Mademoiselle", price: "от 9 500 ₽" },
      { name: "Bleu de Chanel", price: "от 8 900 ₽" },
      { name: "Chance", price: "от 8 600 ₽" },
      { name: "Allure", price: "от 8 400 ₽" },
      { name: "Gabrielle", price: "от 9 100 ₽" },
    ],
  },
  {
    name: "Montale",
    image: brandMontale,
    perfumes: [
      { name: "Wood & Spices", price: "от 8 500 ₽" },
      { name: "Black Aoud", price: "от 9 200 ₽" },
      { name: "Intense Cafe", price: "от 8 800 ₽" },
      { name: "Red Aoud", price: "от 9 500 ₽" },
      { name: "Chocolate Greedy", price: "от 8 200 ₽" },
      { name: "Vanilla Cake", price: "от 7 900 ₽" },
    ],
  },
  {
    name: "Versace",
    image: brandVersace,
    perfumes: [
      { name: "Eros", price: "от 6 800 ₽" },
      { name: "Bright Crystal", price: "от 6 200 ₽" },
      { name: "Dylan Blue", price: "от 6 500 ₽" },
      { name: "Pour Homme", price: "от 5 900 ₽" },
      { name: "Crystal Noir", price: "от 6 400 ₽" },
      { name: "Eros Flame", price: "от 7 100 ₽" },
    ],
  },
  {
    name: "Tom Ford",
    image: brandTomFord,
    perfumes: [
      { name: "Black Orchid", price: "от 12 500 ₽" },
      { name: "Oud Wood", price: "от 15 200 ₽" },
      { name: "Tobacco Vanille", price: "от 14 800 ₽" },
      { name: "Noir", price: "от 11 900 ₽" },
      { name: "Lost Cherry", price: "от 16 500 ₽" },
      { name: "Velvet Orchid", price: "от 13 200 ₽" },
    ],
  },
];

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState<typeof brands[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBrandClick = (brand: typeof brands[0]) => {
    setSelectedBrand(brand);
    setShowModal(true);
  };

  const handleOrderFromModal = () => {
    setShowModal(false);
    scrollToForm();
  };

  return (
    <div className="min-h-screen">
      <Hero onOrderClick={scrollToForm} onContactClick={scrollToForm} />

      {/* Brands Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Популярные производители
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Выберите любимый бренд и откройте каталог
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
            {brands.map((brand) => (
              <BrandCard
                key={brand.name}
                name={brand.name}
                image={brand.image}
                onClick={() => handleBrandClick(brand)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Assortment Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Огромный ассортимент
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed px-4">
              Мы предлагаем более 50 000 ароматов. Хотите больше? Свяжитесь с нами!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 sm:py-16 md:py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Оставьте заявку
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />

      {/* Brand Modal */}
      {selectedBrand && (
        <BrandModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          brandName={selectedBrand.name}
          perfumes={selectedBrand.perfumes}
          onOrder={handleOrderFromModal}
        />
      )}
    </div>
  );
};

export default Index;

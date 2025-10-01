import { useState } from "react";
import { Hero } from "@/components/Hero";
import { BrandCard } from "@/components/BrandCard";
import { Suspense, lazy } from "react";
const BrandModal = lazy(() => import("@/components/BrandModal").then(m => ({ default: m.BrandModal })));
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { trackEvent } from "@/lib/analytics";
import { brands, extraBrands, Brand } from "@/data/brands";


const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState<typeof brands[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBrandClick = (brand: typeof brands[0]) => {
    setSelectedBrand(brand);
    setShowModal(true);
    trackEvent("brand_click", { brand: brand.name });
  };

  const handleOrderFromModal = (perfumeName?: string) => {
    setShowModal(false);
    // заполнение выбранного аромата в форму
    if (perfumeName) {
      const input = document.getElementById("perfume") as HTMLInputElement | null;
      if (input) {
        input.value = perfumeName;
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
    scrollToForm();
    if (selectedBrand) trackEvent("order_from_modal", { brand: selectedBrand.name, perfume: perfumeName });
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
            {extraBrands.map((brand) => (
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

      {/* Floating CTA (mobile) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:hidden z-40">
        <button
          onClick={scrollToForm}
          className="px-5 py-3 rounded-full gradient-gold text-primary-foreground shadow-gold text-sm font-semibold"
        >
          Оставить заявку
        </button>
      </div>

      {/* Why Us Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Почему мы</h2>
            <p className="text-muted-foreground">Коротко о главных преимуществах нашего сервиса</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="p-5 rounded-xl border border-border/50 bg-background shadow-sm text-center">
              <p className="text-lg font-semibold">Только оригинал</p>
              <p className="text-sm text-muted-foreground mt-1">Поставки из ЕС от проверенных партнёров</p>
            </div>
            <div className="p-5 rounded-xl border border-border/50 bg-background shadow-sm text-center">
              <p className="text-lg font-semibold">50 000+ ароматов</p>
              <p className="text-sm text-muted-foreground mt-1">Подберём альтернативу и редкие позиции</p>
            </div>
            <div className="p-5 rounded-xl border border-border/50 bg-background shadow-sm text-center">
              <p className="text-lg font-semibold">Быстрая связь</p>
              <p className="text-sm text-muted-foreground mt-1">WhatsApp и Telegram — отвечаем оперативно</p>
            </div>
            <div className="p-5 rounded-xl border border-border/50 bg-background shadow-sm text-center">
              <p className="text-lg font-semibold">Удобная доставка</p>
              <p className="text-sm text-muted-foreground mt-1">Отправим по всей России удобным способом</p>
            </div>
          </div>
        </div>
      </section>

      {/* Assortment Section removed by request */}

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
        <Suspense fallback={null}>
          <BrandModal
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            brandName={selectedBrand.name}
            perfumes={selectedBrand.perfumes}
            onOrder={handleOrderFromModal}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Index;

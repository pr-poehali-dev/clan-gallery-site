import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              Клан Воины
            </span>
          </div>

          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              О нас
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name="Menu" className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors py-2 text-left"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-primary font-semibold hover:text-primary/80 transition-colors py-2 text-left"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors py-2 text-left"
              >
                О нас
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

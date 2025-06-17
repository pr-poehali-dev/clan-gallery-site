import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Клан</span>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors"
            >
              Главная
            </a>
            <a
              href="#gallery"
              className="text-foreground hover:text-primary transition-colors"
            >
              Галерея
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              О нас
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name="Menu" className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Главная
              </a>
              <a
                href="#gallery"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Галерея
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                О нас
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

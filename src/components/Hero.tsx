import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Icon name="Crown" className="h-16 w-16 text-primary animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          Клан Воины
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Элитная команда игроков, объединенных духом победы и братства. Наша
          сила в единстве, наша цель — господство на поле боя.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium hover-scale">
            Присоединиться к клану
          </button>
          <button
            onClick={scrollToGallery}
            className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-accent transition-all duration-200 font-medium hover-scale"
          >
            Посмотреть галерею
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

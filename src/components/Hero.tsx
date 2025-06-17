import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Icon name="Crown" className="h-16 w-16 text-primary" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          Добро пожаловать в клан
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Мы элитная группа игроков, объединенных страстью к победе и духом
          товарищества. Присоединяйтесь к нашему братству и покоряйте новые
          вершины вместе с нами.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Присоединиться
          </button>
          <button className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-accent transition-colors font-medium">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

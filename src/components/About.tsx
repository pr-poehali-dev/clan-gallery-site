import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">
          О клане Воины
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group animate-fade-in">
            <div className="flex justify-center mb-4">
              <Icon
                name="Users"
                className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Братство
            </h3>
            <p className="text-muted-foreground">
              Сплоченная команда профессиональных игроков, где каждый — это
              часть единого целого
            </p>
          </div>

          <div
            className="text-center group animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex justify-center mb-4">
              <Icon
                name="Trophy"
                className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Достижения
            </h3>
            <p className="text-muted-foreground">
              Множество побед в турнирах, клановых войнах и престижных
              соревнованиях
            </p>
          </div>

          <div
            className="text-center group animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex justify-center mb-4">
              <Icon
                name="Target"
                className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Амбиции
            </h3>
            <p className="text-muted-foreground">
              Стремление к совершенству и покорению новых игровых высот вместе
            </p>
          </div>
        </div>

        <div
          className="mt-16 text-center animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto">
            <Icon
              name="Shield"
              className="h-16 w-16 text-primary mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Наша миссия
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Мы создаем пространство, где талант встречается с преданностью,
              где стратегия сочетается с дружбой. Клан Воины — это не просто
              команда, это семья, готовая покорять любые вершины игрового мира.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

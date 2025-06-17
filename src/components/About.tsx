import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          О нашем клане
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Icon name="Users" className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Команда
            </h3>
            <p className="text-muted-foreground">
              Сплоченная команда профессиональных игроков с многолетним опытом
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Icon name="Trophy" className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Достижения
            </h3>
            <p className="text-muted-foreground">
              Множество побед в турнирах и соревнованиях высокого уровня
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Icon name="Target" className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Цели</h3>
            <p className="text-muted-foreground">
              Стремление к совершенству и покорению новых игровых вершин
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

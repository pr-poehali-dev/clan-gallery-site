import { useState } from "react";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 30 тестовых изображений разных размеров для Pinterest-стиля
  const images = [
    { url: "https://picsum.photos/400/600?random=1", title: "Командный бой" },
    {
      url: "https://picsum.photos/400/300?random=2",
      title: "Победа в турнире",
    },
    { url: "https://picsum.photos/400/700?random=3", title: "Тренировка" },
    { url: "https://picsum.photos/400/400?random=4", title: "Стратегия" },
    { url: "https://picsum.photos/400/500?random=5", title: "Награждение" },
    { url: "https://picsum.photos/400/650?random=6", title: "Клановые войны" },
    { url: "https://picsum.photos/400/350?random=7", title: "Встреча клана" },
    { url: "https://picsum.photos/400/800?random=8", title: "Эпическая битва" },
    { url: "https://picsum.photos/400/450?random=9", title: "Новые участники" },
    { url: "https://picsum.photos/400/550?random=10", title: "Празднование" },
    { url: "https://picsum.photos/400/320?random=11", title: "Подготовка" },
    { url: "https://picsum.photos/400/680?random=12", title: "Финал турнира" },
    { url: "https://picsum.photos/400/420?random=13", title: "Общение" },
    {
      url: "https://picsum.photos/400/750?random=14",
      title: "Легендарный момент",
    },
    { url: "https://picsum.photos/400/380?random=15", title: "Клановый дух" },
    {
      url: "https://picsum.photos/400/620?random=16",
      title: "Совместная игра",
    },
    {
      url: "https://picsum.photos/400/340?random=17",
      title: "Обсуждение тактики",
    },
    { url: "https://picsum.photos/400/720?random=18", title: "Великая победа" },
    { url: "https://picsum.photos/400/480?random=19", title: "Братство" },
    { url: "https://picsum.photos/400/580?random=20", title: "Клановое фото" },
    { url: "https://picsum.photos/400/360?random=21", title: "Отдых" },
    { url: "https://picsum.photos/400/640?random=22", title: "Чемпионат" },
    { url: "https://picsum.photos/400/440?random=23", title: "Дружба" },
    {
      url: "https://picsum.photos/400/760?random=24",
      title: "Историческая битва",
    },
    { url: "https://picsum.photos/400/390?random=25", title: "Единство" },
    {
      url: "https://picsum.photos/400/660?random=26",
      title: "Клановая встреча",
    },
    { url: "https://picsum.photos/400/520?random=27", title: "Общий успех" },
    { url: "https://picsum.photos/400/780?random=28", title: "Легенды клана" },
    { url: "https://picsum.photos/400/460?random=29", title: "Воспоминания" },
    { url: "https://picsum.photos/400/600?random=30", title: "Будущие планы" },
  ];

  return (
    <section id="gallery" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Галерея клана
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in">
            Моменты побед, дружбы и легендарных сражений
          </p>
        </div>

        <div className="masonry-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="masonry-item cursor-pointer group relative overflow-hidden rounded-lg animate-fade-in"
              onClick={() => setSelectedImage(image.url)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full transition-all duration-300 group-hover:scale-110 group-hover:brightness-75"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;

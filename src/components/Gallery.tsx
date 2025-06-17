import { useState } from "react";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Генерируем 30 тестовых изображений разных размеров
  const images = Array.from({ length: 30 }, (_, i) => {
    const width = 400;
    const height = Math.floor(Math.random() * 400) + 300; // Случайная высота от 300 до 700
    return `https://picsum.photos/${width}/${height}?random=${i + 1}`;
  });

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Галерея клана
        </h2>

        <div className="masonry-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="masonry-item cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Изображение ${index + 1}`}
                className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105 shadow-lg"
                loading="lazy"
              />
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

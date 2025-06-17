import { useEffect } from "react";
import Icon from "@/components/ui/icon";

interface ImageModalProps {
  image: string;
  onClose: () => void;
}

const ImageModal = ({ image, onClose }: ImageModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
      >
        <Icon name="X" className="h-6 w-6" />
      </button>

      <div className="max-w-4xl max-h-[90vh] animate-scale-in">
        <img
          src={image}
          alt="Полноэкранное изображение"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ImageModal;

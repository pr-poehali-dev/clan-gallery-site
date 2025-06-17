interface ImageModalProps {
  image: string;
  onClose: () => void;
}

const ImageModal = ({ image, onClose }: ImageModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay animate-fade-in"
      onClick={onClose}
    >
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

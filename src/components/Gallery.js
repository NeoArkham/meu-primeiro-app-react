import GalleryItem from './GalleryItem'; // 1. Importamos nossa peça!

function Gallery() {
  return (
    <div className="gallery-container">
      <GalleryItem /> {/* 2. Usamos a peça como se fosse uma tag HTML */}
      <GalleryItem />
      <GalleryItem />
    </div>
  );
}

export default Gallery;
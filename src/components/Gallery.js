import GalleryItem from './GalleryItem'; // 1. Importamos nossa peça!

function Gallery() {
  return (
    <div className="gallery-container">
      <GalleryItem title="React" color="#61DAFB" /> 
      <GalleryItem title="Vue" color="#4FC08D" />
      <GalleryItem title="Angular" color="#DD0031"/>
    </div>
  );
}

export default Gallery;
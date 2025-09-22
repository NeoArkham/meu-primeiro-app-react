
function GalleryItem({title, color}) { 
 
  const itemStyle = {
    backgroundColor: color,
  }

  return (
    <div className="gallery-item" style={itemStyle}>
        {title}
    </div>
  );
}

export default GalleryItem;
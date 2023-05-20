
const GalleryImage = ({image, id}) => {
  return (
    <figure className={`gallery__item gallery__item--${id}`}>
      <img src={image} alt="" className="gallery__image " />
    </figure>
  );
}
export default GalleryImage
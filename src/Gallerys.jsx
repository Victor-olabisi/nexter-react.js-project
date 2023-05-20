import GalleryImage from "./GalleryImage"
import {gallerys} from '../data'

const Gallerys = () => {
    return (<section className="gallery">
        {gallerys.map(gallery => <GalleryImage key={gallery.id} {...gallery} />)}
    </section>)
}
export default Gallerys




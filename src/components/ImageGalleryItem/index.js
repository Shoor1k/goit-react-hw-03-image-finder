import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, openModal }) => {
    const { largeImageURL, webformatURL, tags } = image
    return (


        < li className={s.imageGalleryItem} onClick={() => {
            openModal(largeImageURL)
        }}>
            <img src={webformatURL} alt={tags} className={s.imageGalleryItemImage} />
        </li >


    )
}
export default ImageGalleryItem

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};
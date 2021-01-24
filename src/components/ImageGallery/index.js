import s from "./ImageGallery.module.css";
import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import Modal from "../Modal"
import PropTypes from 'prop-types';

class ImageGallery extends Component {
    state = {
        largeImg: null,
    }
    openModal = url => {
        this.setState({ largeImg: url });
    };
    closeModal = () => {
        this.setState({ largeImg: null });
    };

    render() {
        const { largeImg } = this.state;
        const { images } = this.props;
        return (

            <ul className={s.imageGallery} >

                { images.map(image => <ImageGalleryItem image={image} key={image.id} openModal={this.openModal} />)}
                {largeImg && <Modal url={largeImg} onClose={this.closeModal} />}
            </ul>
        )
    }

}
export default ImageGallery

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

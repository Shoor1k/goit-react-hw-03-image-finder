import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';



class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onKeydown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeydown);
    }
    onKeydown = e => {
        if (e.key === 'Escape') { this.props.onClose() };
    };
    handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };
    render() {
        return (
            <div
                className={s.overlay}
                onClick={this.handleOverlayClick}
            >
                <div className={s.modal}>
                    <img src={this.props.url} alt='' className={s.item} />
                </div>
            </div>
        )
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};
export default Modal
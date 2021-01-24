import PropTypes from 'prop-types';
import s from "./Button.module.css";

const LoadMore = ({ onClick }) => {
    return (
        <button type="submit" className={s.button} onClick={onClick}>
            <span >Load More</span>
        </button>
    )
}
export default LoadMore

LoadMore.propTypes = {
    onClick: PropTypes.func.isRequired,
};
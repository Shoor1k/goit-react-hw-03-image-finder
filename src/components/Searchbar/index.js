import s from "./Searchbar.module.css";
import { Component } from 'react'
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
    state = {
        serchImage: "",
    }
    onSerchImages = (event) => {
        const { value } = event.currentTarget
        this.setState({
            serchImage: value
        })
    }
    onSerchImagesSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.serchImage)
    }

    render() {

        const { serchImage } = this.state
        return (
            <header className={s.searchbar}>
                <form className={s.searchForm} onSubmit={this.onSerchImagesSubmit}>
                    <button type="submit" className={s.searchFormButton}>
                        <span className={s.searchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        onChange={this.onSerchImages}
                        className={s.searchFormInput}
                        name={serchImage}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }

}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
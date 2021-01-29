import { Component } from "react";

import pixabayApi from "./service";
import Searchbar from "./components/Searchbar";
import LoadMore from "./components/Button";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";

import s from "./App.module.css";




export default class App extends Component {
  state = {
    currenSerchImages: "",
    currentPage: 1,
    images: [],
    isLoading: false,
    modal: { visible: false, alt: '', src: '' },
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      pixabayApi(this.state.currenSerchImages, this.state.currentPage)
        .then(this.updateImages).then(responce => {
          if (this.state.images.length < 1) {
            alert(`Image of ${this.state.currenSerchImages} not found`)
          }
        }).catch(error => {
          alert(error);
          this.setState({ isLoading: false })
        }).finally(this.onScrolWindow)
    }

  }

  updateImages = responce => {
    this.setState((prevState) => ({
      images: [...prevState.images, ...responce.hits],
      isLoading: false,
    }))
  }

  onScrolWindow = () => {
    if (this.state.page !== 1)
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
  }

  onFormSubmit = (serchImages) => {
    if (serchImages === this.state.currenSerchImages || serchImages === '') return;
    this.setState(() => {
      return ({
        currenSerchImages: serchImages,
        currentPage: 1,
        images: [],
        isLoading: true,

      })
    })


  }

  onIncrementPaginatoon = () => {
    const INCREMENT = 1
    this.setState((prevState) => {
      return {
        currentPage: prevState.currentPage + INCREMENT,
        isLoading: true,
      }
    })
  }


  render() {
    const { isLoading, images } = this.state
    return (


      <>
        <div className={s.App}>
          <Searchbar onSubmit={this.onFormSubmit} />
          <ImageGallery images={this.state.images} />
          {isLoading && <Loader />}
          {images.length > 0 && (<LoadMore onClick={this.onIncrementPaginatoon} />)}
        </div>
      </>
    )
  }


}




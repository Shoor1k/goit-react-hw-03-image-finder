import Loader from "react-loader-spinner";
import { Component } from "react";
import s from './Loader.module.css'

export default class Spiner extends Component {

    render() {
        return (
            <Loader
                className={s.loader}
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        );
    }
}
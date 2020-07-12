import React, { Component } from 'react';
import Aux from '../../../hoc/Auxulary';
import './searchbar.scss'
class Searchbar extends Component {
    state = {
        postfilter: null
    }

    onchangehandler = (event) => {
        this.setState({
            postfilter: event.target.value
        });
    }
    onsubmithandlerform = (event) => {
        event.preventDefault();
        this.props.onfilterText(this.state.postfilter);

    }
    render() {
        return (
            <Aux>
                <form className="search-content" onSubmit={this.onsubmithandlerform}>
                    <input type="text" onChange={this.onchangehandler} placeholder="Search you need" className="search-input" />
                    <button className="search-button">Search</button>
                </form>

            </Aux>
        )
    }

}

export default Searchbar;
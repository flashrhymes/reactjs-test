import React, { Component } from 'react';
import Navbar from './navbar/navbar';
import NavbarTop from './navbarTop/navbarTop';
import Artboard from '../Artboard/Artboard';
import './navigation.scss';


class Navigation extends Component {
    state = {
        artboartcontent: false

    }

    artboardOpenHandler = () => {
        this.setState({ artboartcontent: true })
        console.log(this.state.artboartcontent);
    }
    artboardCloseHandler = () => {
        this.setState({ artboartcontent: false })
        console.log(this.state.artboartcontent);
    }



    render() {
        return (
            <div className="navigation-content">
                <NavbarTop   onfilterTextChange={this.props.onfilterTextChangeOn}/>
                <Navbar clicked={this.artboardOpenHandler} />
                {(this.state.artboartcontent) ? <Artboard clicked={this.artboardCloseHandler} /> : null}
            </div>
        )
    }
}
export default Navigation;
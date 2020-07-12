import React, {Component} from 'react';
import Searchbar from '../Searchbar/searchbar';
import logo from '../../../assets/images/Logo.png';
import './navbarTop.scss'


class NavbarTop extends Component{

    render(){
        
        return(
            <div className="navbar-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={logo} alt="Logo"/>
                            <Searchbar onfilterText={this.props.onfilterTextChange}  />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default NavbarTop;
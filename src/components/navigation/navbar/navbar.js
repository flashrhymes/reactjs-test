import React from 'react';
import './navbar.scss'

const Navbar = (props) => {
    return (
        <div className="nav-menu-tab clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="navbar-ul">
                            <a href="/">What new </a>
                            <a href="/">Leatest Trending</a>
                            <a href="/">Popular Trending</a>
                            <a href="/">Most Recent</a>
                        </div>
                        <div className="navbar-sendmsg">
                            <div className="navbar-circle" onClick={props.clicked}>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;
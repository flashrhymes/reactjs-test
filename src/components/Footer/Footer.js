import React, { Component } from 'react';
import './footer.scss'

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-content">
                            <div className="footer-nav">
                                <a href="/">Help Blog</a>
                                <a href="/">Careers</a>
                                <a href="/">Privacy</a>
                                <a href="/">Terms</a>
                                <a href="/">About</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
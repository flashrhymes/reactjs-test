import React from 'react';
import './artboard.scss'
const Artboard = (props) => {
    return (
        <div className="artboard-panel">
            <div className="artboard-content">
                <div className="artboard-top">
                    <p>Ramkumar</p>
                    <div className="artboard-circle" onClick={props.clicked}>
                        <span>--</span>
                    </div>
                </div>
                <textarea name="" id=""  rows="10"></textarea>
                <div className="artboard-bottom">
                    <button className="artboard-close" onClick={props.clicked}>Close</button>
                    <button className="artboard-post">Post</button>
                </div>
            </div>
        </div>
    );
};

export default Artboard;
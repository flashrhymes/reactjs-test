import React from 'react';
import './posts.scss'

const posts = (props) => {
    return (
        <div className="posts-content" onClick={props.clicked}>
            <img src={props.image} alt="" />
            <div style={{ borderBottom: "2px solid #43A6EB" }} className="posts-content-info">
                <span style={{ color: " #43A6EB" }} className="posts-category">{props.category}</span>
                <span className="posts-time">on {props.time} / <span>by {props.author}</span></span>
                <h5 className="posts-title">{props.title}</h5>
                <p className="posts-info-text">{props.infotext}</p>
            </div>
        </div>
    );
};

export default posts;


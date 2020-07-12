import React, { Component } from 'react';
import Aux from '../../hoc/Auxulary';
import Navigation from '../navigation/navigation';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
// import postBig from '../../assets/images/postBig.jpg';
import axios from '../../axios-orders';
import "./post.scss"


class Post extends Component {

    state = {
        loadedpost: []
    }

    componentDidMount() {
        this.loadData();

    }

    loadData() {
        axios.get('/post.json').then(response => {
            const newfetch = [];
            for (let id in response.data) {
                newfetch.unshift({
                    ...response.data[id], id: [id]
                });
            }
            const filterpost = newfetch.filter((filterpost) => {
                if (filterpost.id == this.props.match.params.id) {
                    return filterpost;
                }
            })
            this.setState({ loadedpost: filterpost })
        })
    }

    render() {
        const localPost = this.state.loadedpost;
        const currentpost = localPost[0];
        if (currentpost !== null && currentpost !== undefined && localPost.length !== 0) {
            console.log(currentpost)
            return (
                <Aux>
                    <Navigation />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="post-container clearfix">
                                    <div className="post-title">
                                        <span>{currentpost.post.category}</span>
                                        <h4>{currentpost.post.title}</h4>
                                    </div>
                                    <div style={{ borderBottom: "2px solid #43A6EB" }} className="post-content">
                                        <img src={currentpost.post.full} alt="" />
                                        <div className="post-information" >
                                            <p dangerouslySetInnerHTML={{__html: currentpost.post.content}}></p>
                                            <h6>on {currentpost.post.created_at} / <span>by {currentpost.post.author}</span></h6>
                                        </div>
                                    </div>

                                </div>
                                <div className="post-home-btn-content">
                                <Link to="/" className="post-home-btn">Home Page</Link>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                    <Footer />
                </Aux>
            );
        } else {
            return (
                <div></div>
            );
        }

    }
}

export default Post;
import React, { Component } from 'react';
import Aux from '../../hoc/Auxulary';
import Navigation from '../navigation/navigation';
import Posts from './posts/posts';
import { Link, Route } from 'react-router-dom'
import Footer from '../Footer/Footer';
import axios from '../../axios-orders';
import './HomePage.scss';


class HomePage extends Component {
    state = {
        posts: [],
        postlenght: 6,
        postfilter: '',
    }
    componentDidMount() {

        axios.get('/post.json').then(pst => {
            const newfetch = [];
            for (let userid in pst.data) {
                newfetch.unshift({
                    ...pst.data[userid], id: [userid]
                });
            }

            this.setState({ posts: newfetch });
            console.log(this.state.posts)
        });
    }
    postdeleteHandler = (id) => {
        const usestate = this.state.posts;
        // console.log(usestate);

        const filterpost = usestate.filter((filterpost) => {
            if (filterpost.id == id) {
                return filterpost;
            }
        })
        console.log(filterpost[0].id.toString());
        axios.delete('/post/' + filterpost[0].id.toString() + ".json" ).then(response => {
           console.log(response);
        })
    }
    addMoreHandler = () => {
        this.setState({ postlenght: this.state.postlenght + 3 })
    }
    postSelectHnadler = (id) => {
        this.props.history.push(id);
    }
    postfilterhandler = (postfilter) => {
        this.setState({
            postfilter: postfilter
        })

    }


    render() {

        const searchlowercase = this.state.postfilter.toLowerCase();
        const PostRender = this.state.posts.filter(name => name.post.title.toLowerCase().includes(searchlowercase)).slice(0, this.state.postlenght).map(pst => (
            
            <div
                key={pst.id} className="col-md-4">
                <Link to={'/post/' + pst.id}>
                    <Posts
                        clikced={() => this.postSelectHnadler(pst.id)}
                        infotext={pst.post.preview}
                        title={pst.post.title}
                        category={pst.post.category}
                        time={pst.post.created_at}
                        author={pst.post.author}
                        image={pst.post.thumbnail}
                    />

                </Link>
                <button className="btn btn-danger" onClick={() => this.postdeleteHandler(pst.id)}>Delete post</button>
                <Link className="btn btn-success" to={'/updatepost/' + pst.id}>Update Post</Link>
            </div>


        ))
        return (
            <Aux>
                {/* {console.log(this.state)} */}
                <Navigation postfilter={this.state.postfilter} onfilterTextChangeOn={this.postfilterhandler} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="posts-title-h4">Government & Politics</h4>
                        </div>
                        {PostRender}



                        <div className="col-md-12">
                            <button onClick={this.addMoreHandler} className="more-posts-load">Load More</button>
                        </div>
                    </div>
                </div>
                <Footer />

            </Aux>

        )
    }
}

export default HomePage;
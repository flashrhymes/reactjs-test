import React, { Component } from 'react';
import Aux from '../../hoc/Auxulary';
import axios from 'axios';
import Navigation from '../navigation/navigation';
import Footer from '../Footer/Footer';
import "./addpost.scss"


class AddPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            userid: "",
            created_at: "",
            category: "",
            author: "",
            title: "",
            preview: "",
            thumbnail: "https://via.placeholder.com/368x285/223",
            full: "https://via.placeholder.com/1177x462/223",
            content: ""
        }
    }

    
    postinputchangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    postAddHandler = (event) => {
        event.preventDefault();
        const post = this.state
        axios.post("https://flashrhymes-b5590.firebaseio.com/post.json", { post }).then(
            pstrs => {
                console.log(pstrs);
                console.log(pstrs.data);

            }
        )
    }
    render() {
        const {userid , category,created_at,author,title,preview,content} = this.state
        return (
            <Aux>
                <Navigation />
                <div className="container">
                    <div className="AddpostForm">
                        <form  onSubmit={ this.postAddHandler}>
                            <div className="form-group">
                                <label htmlFor="">User ID</label>
                                <input type="text" name="userid" className="form-control" value={userid}  onChange={this.postinputchangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Category</label>
                                <input type="text" name="category" className="form-control" value={category} onChange={this.postinputchangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Creating time</label>
                                <input type="text" name="created_at" className="form-control" value={created_at} onChange={this.postinputchangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Author</label>
                                <input type="text" name="author" className="form-control" value={author} onChange={this.postinputchangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Title</label>
                                <input type="text" name="title" className="form-control" value={title} onChange={this.postinputchangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Preview</label>
                                <input type="text" name="preview" className="form-control" value={preview} onChange={this.postinputchangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Full text</label>
                                <textarea className="form-control" name="content" rows="3" value={content} onChange={this.postinputchangeHandler}></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">Add Post</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </Aux>
        );
    }
}

export default AddPost;
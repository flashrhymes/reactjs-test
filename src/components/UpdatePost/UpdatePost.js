import React, { Component } from 'react';
import Aux from '../../hoc/Auxulary';
import axios from '../../axios-orders';
import Navigation from '../navigation/navigation';
import Footer from '../Footer/Footer';
import "./updatepost.scss"


class UpdatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loadedpost: [],
            updatedpost: []
        }
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


    postinputchangeHandler = (e) => {
        // const changeposted = this.state.loadedpost[0].post
        // const names = e.target.name
        this.setState({ [e.target.name]: e.target.value })
        // console.log(this.state.loadedpost[0].post.names )
        console.log(this.state + "." + e.target.name)
    }
    postAddHandler = (event) => {
        event.preventDefault();
        const post = {
            [event.target.name]: event.target.value
            // full: "https://via.placeholder.com/1177x462/223",
            // thumbanil: "https://via.placeholder.com/368x285/223"
        }
        console.log(post);
        // axios.put("/post/" + this.state.loadedpost[0].id.toString() + ".json", { post }).then(
        //     pstrs => {
        //         console.log(pstrs);
        //         console.log(pstrs.data);

        //     }
        // )
    }

    render() {
        if (this.state.loadedpost[0] !== undefined && this.state.loadedpost[0] !== null) {
            const { userid, category, created_at, author, title, preview, content, thumbnail, full } = this.state.loadedpost[0].post
            return (
                <Aux>
                    <Navigation />
                    <div className="container">
                        <div className="UpdatePostForm">
                            <form onSubmit={this.postAddHandler} onChange={this.postinputchangeHandler}>
                                <div className="form-group">
                                    <label htmlFor="">User ID</label>
                                    <input type="text" name="userid" className="form-control" defaultValue={userid} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Category</label>
                                    <input type="text" name="category" className="form-control" defaultValue={category} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Creating time</label>
                                    <input type="text" name="created_at" className="form-control" defaultValue={created_at} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Author</label>
                                    <input type="text" name="author" className="form-control" defaultValue={author} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">full</label>
                                    <input type="text" name="full" className="form-control" defaultValue={full} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">thumnail</label>
                                    <input type="text" name="thumbnail" className="form-control" defaultValue={thumbnail} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Title</label>
                                    <input type="text" name="title" className="form-control" defaultValue={title} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Preview</label>
                                    <input type="text" name="preview" className="form-control" defaultValue={preview} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Full text</label>
                                    <textarea className="form-control" name="content" rows="3" defaultValue={content}></textarea>
                                </div>
                                <button className="btn btn-primary" type="submit">Update Post</button>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </Aux>
            );
        } else {
            return <div></div>
        }


    }
}



export default UpdatePost;
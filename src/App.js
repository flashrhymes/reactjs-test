import React, { Component } from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Post from './components/Post/Post';
import AddPost from './components/AddPost/AddPost';
import UpdatePost from './components/UpdatePost/UpdatePost';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/addpost"   component={AddPost}/>
          <Route path={"/post/:id"}  component={Post} />
          <Route path={"/updatepost/:id"}  component={UpdatePost} />
          <Route path="/post"  component={Post} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    );
  }

}

export default App;

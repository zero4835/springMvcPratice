import React, { Component } from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import MyCarousel from '../components/MyCarousel';
import Mycard from '../components/MyCard';
import PostList from '../components/post/PostList';

class Home extends Component {

    render() {
        return (
            <>
                <MyCarousel/>
                <PostList/>
                {/* <Mycard/> */}
            </>   
        );
    }

}

export default Home;
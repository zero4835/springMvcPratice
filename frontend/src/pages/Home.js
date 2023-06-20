import React, { Component } from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import MyCarousel from '../components/MyCarousel';
import Mycard from '../components/MyCard';

class Home extends Component {

    render() {
        return (
            <>
                <MyCarousel/>
            </>   
        );
    }

}

export default Home;
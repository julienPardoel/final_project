import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className="home-container">
                <h2>Home</h2>
            </div>
            <Footer/>
        </div>
    )
}

export default Home

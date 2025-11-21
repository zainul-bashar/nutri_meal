import React from 'react';
import './Home.css';
import Header from './Header';
import FilterAndsearch from './FilterAndSearch';
import Footer from './Footer';
import Demo from './Demo';



const Home = () => {
   
    return(

        <div className="Home">
           <Header/>
           <FilterAndsearch/>
           <Demo/>
           <Footer/>
        </div>
    )
}
export default Home;
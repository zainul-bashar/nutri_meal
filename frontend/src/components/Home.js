import React from 'react';
import './Home.css';
import Header from './Header';
import FilterAndsearch from './FilterAndSearch';



const Home = () => {
   
    return(

        <div className="Home">
           <Header/>
           <FilterAndsearch/>
        </div>
    )
}
export default Home;
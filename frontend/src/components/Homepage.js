// import React from 'react';
// import './HomePage.css';
// import mealImage from '../image/meal-img.jpg';

// const HomePage = () => {
    
//     return(

//         <div className="HomePage">
//              <img src={mealImage} alt="meal" className="HomePage-img"/>
//         </div>

//     )
// }
// export default HomePage;

import React from 'react';
import './HomePage.css';
import mealImage from '../image/meal-img.jpg';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate();

    const spanClick = () => {
         console.log("clikced")
        navigate('/home')
   }
    return (
        <div
            className="HomePage"
            style={{
                backgroundImage: `url(${mealImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
            }}
        >
            <div className="HomePage-content">
                <h1>Welcome to Nutri-Meal</h1>
                <p>Your journey to healthy eating starts here.</p>
                <div className="HomePage-actions">
                    <a href="/login" className="HomePage-button">Login Page</a>
                    <a href="/signup" className="HomePage-button">Signup Page</a>
                </div>
                <span onClick={spanClick}
                      style={{ cursor: 'pointer', color: 'white', textDecoration: 'underline' }}
                >Click here to move to the Home Page.</span>
            </div>
        </div>
    );
}

export default HomePage;
import React from 'react';
import Button from '../../components/Common/Button'
import './style.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the School Management System</h1>
            <p>
                This is the home page. From here, you can navigate to the login, registration, and profile sections.
            </p>
            <Button text="Get Started" onClick={() => alert('Redirecting to Get Started')} />
                
        </div>
    );
};

export default Home;

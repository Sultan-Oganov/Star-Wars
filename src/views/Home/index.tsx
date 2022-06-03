import React from 'react';
import Search from '../../components/Search/index';
import './styles.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Search page="home" />
        </div>
    );
};

export default Home;
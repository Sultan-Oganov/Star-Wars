import React from 'react';
import e404 from '../../assets/images/404.png';
import './styles.css';

const Notfound = () => {
    return (
        <div className="notfound">
            <img className="notfound__img" src={e404} alt="404" />
            <h2 className="notfound__title">Not Found</h2>
        </div>
    );
};

export default Notfound;
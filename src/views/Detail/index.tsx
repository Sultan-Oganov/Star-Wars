import React from 'react';
import List from '../../components/List';
import Search from '../../components/Search';
import './styles.css';

const Detail: React.FC = () => {
    return (
        <div className="detail">
            <Search />
            <List />
        </div>
    );
};

export default Detail;
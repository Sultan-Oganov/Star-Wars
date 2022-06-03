import React, { useEffect } from 'react';
import { useTypedSelector } from '../../modules/hooks/useTypeSelector';
import Notfound from '../Notfound';
import { useParams } from 'react-router-dom';
import './styles.css';
import { useActions } from '../../modules/hooks/useActions';
import loading from '../../assets/images/loading.gif';

const List: React.FC = () => {
    const { category, label } = useParams();

    const { data, error, isLoading } = useTypedSelector(state => state.starWars);
    const { getSearchData } = useActions();

    useEffect(() => {
        if (data.length === 0) getSearchData(category, label);
    }, [data, category, label]);

    if (isLoading) return <img className="loading" src={loading} alt="Loading" />

    return (
        <div className={data ? "list" : ""}>
            {!error ?
                data?.map((item: any, index: number) => {
                    return (
                        <div className="list__card" key={index}>
                            {
                                Object.keys(item).map((key, i) => (
                                    typeof item[key] === 'string' && item[key].length < 20 ?
                                        <h3 key={i} className="list__text">{key}: <span className="list__label">{item[key]}</span></h3>
                                        : null
                                ))
                            }
                        </div>
                    )
                })
                :
                <Notfound />
            }
        </div>
    );
};

export default List;
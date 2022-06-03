import React, { useEffect, useRef, useState } from 'react';
import { useTypedSelector } from '../../modules/hooks/useTypeSelector';
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from '../../modules/hooks/useActions';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './styles.css';

interface Props {
    page?: string
}

const Search: React.FC<Props> = ({ page }) => {
    const navigate = useNavigate();
    const { category, label } = useParams();
    const { categories } = useTypedSelector(state => state.starWars);
    const { getSearchData } = useActions();

    const [formData, setFormData] = useState({
        category: category || categories[0] || "people",
        label: label || ""
    });

    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        input.current?.focus();
    }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        getSearchData(formData.category, formData.label);
        navigate(`/search/${formData.category}/${formData.label}`, { replace: true });
    }

    const handleChange = (key: string, value: string) => setFormData({ ...formData, [key]: value });

    return (
        <div className={page ? "search-home" : "search"}>
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>
            <form className="search__form" onSubmit={handleSubmit}>
                <input ref={input} placeholder="enter a search term" className="search__input" value={formData.label} onChange={(event) => handleChange("label", event.target.value)} type="text" />
                <select className="search__select" value={formData.category} onChange={(event) => handleChange("category", event.target.value)}>
                    {categories?.map((category, index) => (
                        <option className="search__select" key={index}>{category}</option>
                    ))}
                </select>
                <button className="search__btn">Search</button>
            </form>
        </div>

    );
};

export default Search;
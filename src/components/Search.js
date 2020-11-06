import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [ term, setTerm ] = useState('');

    const onHandleSearchTerm = (e) => {        
        setTerm(e.target.value)
    }
    // first argument is always a function for useEffect
    useEffect(() => {
        const search = async () => {
            const response = axios.get('');
        };

        search();
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={onHandleSearchTerm}
                        type="text" 
                        className="input" />
                </div>
            </div>
        </div>
    )
};

export default Search;
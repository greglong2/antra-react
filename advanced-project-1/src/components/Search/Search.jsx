import { useCallback, useEffect, useState } from "react";
import _ from 'lodash';
import './Search.css';

function Search({ onSubmit }) {

    const [inputValue, setInputValue] = useState('');

    const inputHandler = (e) => {
        setInputValue(e.target.value);
    }

    const debuouncedOnSubmit = useCallback(_.debounce(onSubmit, 1000), [onSubmit]);

    useEffect(() => {
        debuouncedOnSubmit(inputValue)
    }, [inputValue])

    return (
        <div className='input-container'>
            <input className='input-field' value={inputValue} onChange={inputHandler} />
            <button className='input-btn' onClick={() => onSubmit(inputValue)}>Search</button>
        </div>
    );
}

export default Search;
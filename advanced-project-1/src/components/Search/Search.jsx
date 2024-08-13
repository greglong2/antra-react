import { useEffect, useRef, useState } from "react";
// import _ from 'lodash';
import './Search.css';
import { useDispatch, useSelector } from "react-redux";
import { setAutocomplete, setAutocompleteIndex, setSelectedBook } from "../../redux/slices/BooksSlice";

function Search({ onSubmit }) {

    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const books = useSelector(state => state.books.searchResults);
    const autocomplete = useSelector(state => state.books.autocomplete);
    const autocompleteIndex = useSelector(state => state.books.autocompleteIndex);

    const searchElRef = useRef(null);

    const inputHandler = (e) => {
        setInputValue(e.target.value);
    }

    //const debuouncedOnSubmit = useCallback(_.debounce(onSubmit, 1000), [onSubmit]);

    const handleClick = (e, book) => {
        dispatch(setSelectedBook(book));
        dispatch(setAutocomplete(false));
    };



    const handleKeyDown = (e) => {
        console.log(e.key);
        console.log(autocompleteIndex);
        console.log(autocomplete)
        if (e.key === "ArrowDown") {
            dispatch(setAutocompleteIndex(autocompleteIndex < books.length - 1 ? autocompleteIndex + 1 : autocompleteIndex))
        } else if (e.key === "ArrowUp") {
            dispatch(setAutocompleteIndex(autocompleteIndex > 0 ? autocompleteIndex - 1 : autocompleteIndex))
        } else if (e.key === "Enter") {
            dispatch(setSelectedBook(books[autocompleteIndex]));
            dispatch(setAutocomplete(false));
            dispatch(setAutocompleteIndex(0))
        } else if (e.key === "Escape") {
            dispatch(setAutocomplete(false));
        }
    };


    useEffect(() => {
        //debuouncedOnSubmit(inputValue)
    }, [inputValue])

    useEffect(() => {
        const handleClickOutside = (e) => {
            console.log(searchElRef.current, !searchElRef.current.contains(e.target))
            if (searchElRef.current && !searchElRef.current.contains(e.target)) {
                dispatch(setAutocomplete(false));
                dispatch(setAutocompleteIndex(0));
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [dispatch]);

    return (
        <div className='input-container' ref={searchElRef}>
            <input
                className='input-field'
                value={inputValue}
                onChange={inputHandler}
                onClick={() => { dispatch(setAutocomplete(true)) }}
                onKeyDown={handleKeyDown}
            />
            <button className='input-btn' onClick={() => onSubmit(inputValue)}>Search</button>
            {
                autocomplete && (
                    <ul className="autocomplete">
                        {
                            books?.map((book, index) =>
                                <li
                                    key={book.id}
                                    className={`option ${index === autocompleteIndex ? 'active-option' : ""}`}
                                    onClick={(e) => handleClick(e, book)}
                                >
                                    {book.volumeInfo.title}
                                </li>
                            )
                        }
                    </ul>
                )
            }

        </div>
    );
}

export default Search;
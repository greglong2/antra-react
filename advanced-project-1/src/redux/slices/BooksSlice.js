import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchBooks = createAsyncThunk(
    'books/searchBooks',
    async (query, { dispatch }) => {
        if (!(query.trim())) {
            console.log('empty query');
            return;
        }

        dispatch(setLoading(true));

        console.log('query', query, encodeURI(query));

        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=10`);
            const data = await response.json();

            console.log(data);

            dispatch(setSearchResults(data.items));
        }
        catch (err) {
            console.error(err);
        }
        finally {
            dispatch(setLoading(false));
        }
    }
)

export const booksSlice = createSlice({

    name: "books",
    initialState: {
        searchResults: [],
        wishlist: [],
        loading: false,
        autocomplete: false,
        autocompleteIndex: 0,
        selectedBook: null
    },
    reducers: {
        addWishlistItem: (state, action) => {
            if (state.wishlist.find(book => book.id === action.payload.id)) {
                return;
            }

            state.wishlist.push(action.payload);
        },
        removeWishlistItem: (state, action) => {
            console.log('action', action)
            console.log('payload id', action.payload.id)
            console.log('before', state.wishlist)
            state.wishlist = state.wishlist.filter(book => book.id !== action.payload.id);
            console.log('after', state.wishlist)
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAutocomplete: (state, action) => {
            state.autocomplete = action.payload;
        },
        setAutocompleteIndex: (state, action) => {
            console.log('autocomplete index action.payload', action.payload)
            state.autocompleteIndex = action.payload;
        },
        setSelectedBook: (state, action) => {
            state.selectedBook = action.payload;
        }
    }
});

export const { addWishlistItem, removeWishlistItem, setAutocomplete, setAutocompleteIndex, setSelectedBook, setLoading, setSearchResults } = booksSlice.actions;

export default booksSlice.reducer;
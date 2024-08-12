import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchBooks = createAsyncThunk(
    'books/searchBooks',
    async (query, { dispatch }) => {
        if (!(query.trim())) {
            console.log('empty query');
            return;
        }

        console.log('query', query, encodeURI(query));

        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=10`);
        const data = await response.json();

        console.log(data);

        dispatch(setSearchResults(data.items));
    }
)

export const booksSlice = createSlice({

    name: "books",
    initialState: {
        searchResults: [],
        wishlist: []
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
        }
    }
});

export const { addWishlistItem, removeWishlistItem, setSearchResults } = booksSlice.actions;

export default booksSlice.reducer;
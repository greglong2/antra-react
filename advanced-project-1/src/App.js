import './App.css';
import Wishlist from './components/Wishlist/Wishlist';
import SearchResults from './components/Search/SearchResults/SearchResults';
import Search from './components/Search/Search';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWishlistItem, removeWishlistItem, searchBooks, setSearchResults } from './redux/slices/BooksSlice';

function App() {

  const dispatch = useDispatch();
  const books = useSelector(state => state.books.searchResults);
  const wishlist = useSelector(state => state.books.wishlist);

  // const [books, setBooks] = useState([]);
  // const [wishlist, setWishlist] = useState([]);

  const searchHandler = async (query) => {
    dispatch(searchBooks(query))
  }

  const addToWishlistHandler = (book) => {
    console.log('addToWishlistHandler')

    dispatch(addWishlistItem(book))

    // if (wishlist.find(wishlistBook => wishlistBook.id === book.id)) {
    //   return;
    // }

    // setWishlist([book, ...wishlist]);
  }

  const deleteHandler = (bookId) => {

    dispatch(removeWishlistItem({ id: bookId }))

    //console.log('deleteHandler', bookId)
    //setWishlist(wishlist.filter(wishlistBook => wishlistBook.id !== bookId));
  }

  return (
    <div className="App">
      <div className="search-list">
        <Search onSubmit={searchHandler} />
        <SearchResults onAdd={addToWishlistHandler} books={books} />
      </div>
      <div className='wishlist-list'>
        <Wishlist onDelete={deleteHandler} wishlist={wishlist} />
      </div>
    </div>
  );
}

export default App;

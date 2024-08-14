import './App.css';
import Wishlist from './components/Wishlist/Wishlist';
import SearchResults from './components/Search/SearchResults/SearchResult';
import Search from './components/Search/Search';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWishlistItem, removeWishlistItem, searchBooks, setSelectedBook } from './redux/slices/BooksSlice';
import { RootState } from './redux/store';

function App() {

  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.searchResults);
  const wishlist = useSelector((state: RootState) => state.books.wishlist);
  const loading = useSelector((state: RootState) => state.books.loading);
  const selectedBook = useSelector((state: RootState) => state.books.selectedBook);

  // const [books, setBooks] = useState([]);
  // const [wishlist, setWishlist] = useState([]);

  const searchHandler = async (query: string) => {
    dispatch(setSelectedBook(null))
    dispatch(searchBooks(query))
  }

  const addToWishlistHandler = (book: any) => {
    console.log('addToWishlistHandler')

    dispatch(addWishlistItem(book))

    // if (wishlist.find(wishlistBook => wishlistBook.id === book.id)) {
    //   return;
    // }

    // setWishlist([book, ...wishlist]);
  }

  const deleteHandler = (bookId: string) => {

    dispatch(removeWishlistItem({ id: bookId }))

    //console.log('deleteHandler', bookId)
    //setWishlist(wishlist.filter(wishlistBook => wishlistBook.id !== bookId));
  }

  return (
    <div className="App">
      <div className="search-list">
        <Search onSubmit={searchHandler} />
        {
          loading ? <div>Loading...</div> : <SearchResults onAdd={addToWishlistHandler} books={selectedBook ? [selectedBook] : books} />
        }
      </div>
      <div className='wishlist-list'>
        <Wishlist onDelete={deleteHandler} wishlist={wishlist} />
      </div>
    </div>
  );
}

export default App;

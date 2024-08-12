import BookCard from "./BookCard";

function SearchResults({ onAdd, books }) {

    return (
        <div>
            {
                books?.map((book, index) => (
                    (
                        <BookCard onAdd={() => onAdd(book)} key={book.id} book={book} />
                    )
                ))
            }
        </div>
    );
}

export default SearchResults;
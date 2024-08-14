import BookCard from "./BookCard";

function SearchResults({ onAdd, books }: { onAdd: (book: any) => void, books: any[] }) {

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
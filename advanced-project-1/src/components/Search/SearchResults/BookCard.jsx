import "./BookCard.css";

function BookCard({ onAdd, book }) {

    console.log('bookId', book.id)

    const {
        imageLinks,
        title,
        authors,
        publishedDate,
        publisher,
        description
    } = book.volumeInfo

    return (
        <div className='book-card-container' onClick={onAdd}>
            <img src={imageLinks?.thumbnail} alt={book.title} />
            <ul>
                <li><h3>{title}</h3></li>
                <li><strong>Authors:</strong> {authors?.length > 1 ? authors.join(", ") : authors}</li>
                <li><strong>Publisher:</strong> {publisher}</li>
                <li><strong>Published Date:</strong> {publishedDate}</li>
                <li><strong>Description:</strong> {description}</li>
            </ul>
        </div>
    );
}

export default BookCard;
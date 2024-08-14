import "./WishlistItem.css";

function WishlistItem({ book, onDelete }: { book: any, onDelete: (bookId: string) => void }) {
    return (
        <div className="wishlist-item-container">
            <span>{book.volumeInfo.title}</span>
            <button onClick={() => onDelete(book.id)}>delete</button>
        </div>
    )
}

export default WishlistItem;
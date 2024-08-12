import "./WishlistItem.css";

function WishlistItem({ book, onDelete }) {
    return (
        <div className="wishlist-item-container">
            <span>{book.volumeInfo.title}</span>
            <button onClick={() => onDelete(book.id)}>delete</button>
        </div>
    )
}

export default WishlistItem;
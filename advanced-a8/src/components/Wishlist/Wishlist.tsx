import WishlistItem from "./WishlistItem";
import './Wishlist.css';
import React from "react";

function Wishlist({ onDelete, wishlist }: { onDelete: (bookId: string) => void, wishlist: any[] }) {

    return (
        <div className='wishlist-container'>
            <h3>My reading wishlist({wishlist.length})</h3>
            <ul>
                {
                    wishlist.map(book => (
                        <WishlistItem key={book.id} book={book} onDelete={onDelete} />
                    ))
                }
            </ul>
        </div>
    );
}

export default Wishlist;
export const booksThunk = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=flowers");
            const data = await response.json();
            dispatch({ type: "books/setBooks", payload: data.items });
        } catch (err) {
            console.log(err);
        }
    }
}
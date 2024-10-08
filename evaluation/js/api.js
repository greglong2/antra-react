const API = (() => {
    const URL = "http://localhost:3000";
    const getCart = () => {
        // define your method to get cart data
        return fetch(URL + "/cart")
            .then((res) => res.json())
    };

    const getInventory = () => {
        // define your method to get inventory data
        return fetch(URL + "/inventory")
            .then((res) => res.json())
    };

    const addToCart = (cartItem) => {
        // define your method to add an item to cart
        return fetch(URL + "/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cartItem),
        })
            .then((res) => res.json())
    };

    const updateCart = (id, cartItem) => {
        //TODO: not actually updating the amount
        // define your method to update an item in cart
        return fetch(URL + `/cart/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cartItem),
        })
            .then((res) => res.json())
    };

    const deleteFromCart = (id) => {
        // define your method to delete an item in cart
        return fetch(URL + `/cart/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id }),
        })
            .then((res) => res.json())
    };

    const checkout = () => {
        // you don't need to add anything here
        return getCart().then((data) =>
            Promise.all(data.map((item) => deleteFromCart(item.id)))
        );
    };

    return {
        getCart,
        updateCart,
        getInventory,
        addToCart,
        deleteFromCart,
        checkout,
    };
})();
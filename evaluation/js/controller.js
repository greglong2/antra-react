const Controller = ((model, view) => {
    // implement your logic for Controller
    const state = new model.State();

    const init = () => {
        handleUpdateAmount();
        handleAddToCart();
        handleDelete();
        handleCheckout();
        handlePagination();
        handlePaginationButton();
    };

    // TODO: render updates when cart amount is updated
    // not wanted

    // done
    const handleUpdateAmount = () => {

        view.inventoryItemsEl.addEventListener("click", (e) => {
            e.preventDefault();

            const target = e.target;

            if (target.className === "inventory_minus-btn") {
                const id = target.parentElement.id;
                const pAmountEl = document.querySelector(`#item-${id}-amount`);
                console.log(pAmountEl);

                const existingAmount = parseInt(pAmountEl.textContent);
                const newAmount = existingAmount - 1;

                if (newAmount >= 0) {
                    pAmountEl.textContent = newAmount;
                }
            }

            if (target.className === "inventory_plus-btn") {
                const id = target.parentElement.id;
                const pAmountEl = document.querySelector(`#item-${id}-amount`);
                console.log(pAmountEl);

                const existingAmount = parseInt(pAmountEl.textContent);
                const newAmount = existingAmount + 1;

                pAmountEl.textContent = newAmount;
            }
        })

    };

    // done
    const handleAddToCart = () => {
        view.inventoryItemsEl.addEventListener("click", (e) => {
            e.preventDefault();

            const target = e.target;

            if (target.className === "add-cart-btn") {
                const id = target.parentElement.id;
                const pAmountEl = document.querySelector(`#item-${id}-amount`);
                const amount = parseInt(pAmountEl.textContent);
                const content = target.parentElement.querySelector("p").textContent;

                console.log(id, pAmountEl, amount, content)

                if (amount !== 0) {

                    let cartItem = state.cart.find((item) => item.id === id);

                    console.log('ci', cartItem);

                    if (cartItem !== undefined) {
                        cartItem.amount += amount;
                        model.updateCart(id, cartItem).then((cart) => {
                            view.renderCart(state.cart);
                        });
                    }
                    else {
                        cartItem = {
                            id,
                            amount,
                            content
                        };
                        model.addToCart(cartItem).then((cart) => {
                            state.cart = [...state.cart, cartItem];
                        });
                    }
                }
                //if item exists, update it
                // if it doesnt, create it and push it to the cart


                // TODO: finish
                // let cartItem = state.cart.find((item) => item.id === id);

                // if (cartItem) {
                //     cartItem.amount += amount;
                //     model.updateCart(id, cartItem).then((cart) => {
                //         state.cart = cart;
                //     });
                // }
                // else {
                //     cartItem = {
                //         id,
                //         amount,
                //         content
                //     };
                //     model.addToCart(cartItem).then((cart) => {
                //         state.cart = cart;
                //     });
                // }
            }

        });
    };

    const handleDelete = () => {
        view.cartItemsEl.addEventListener("click", (e) => {
            e.preventDefault();

            const target = e.target;

            if (target.className === "cart_delete-btn") {
                const id = target.parentElement.id;
                model.deleteFromCart(id).then((cart) => {
                    state.cart = state.cart.filter((item) => item.id !== id);
                });
            }
        });
    };

    const handleCheckout = () => {
        view.checkoutBtnEl.addEventListener("click", (e) => {
            e.preventDefault();

            model.checkout().then(() => {
                state.cart = [];
            });
        });
    };

    const handlePagination = () => {
        view.inventoryPaginationPagesEL.addEventListener('click', (e) => {

            const target = e.target;
            const pageNumber = Number(target.id);

            state.currentPage = pageNumber;

            view.renderInventory(state.getInventoryForPage(pageNumber));
        })
    }

    const handlePaginationButton = () => {

        view.inventoryPaginationContianerEl.addEventListener('click', (e) => {

            if (e.target.className === 'inventory_pagination_prev-btn') {
                if (state.currentPageInventory != 0) state.currentPageInventory -= 1;
            }
            else {
                if (state.currentPageInventory !== state.totalPagesInventory - 1) state.currentPageInventory += 1;
            }

        })
    }

    const bootstrap = () => {

        state.subscribeCart(() => {
            view.renderCart(state.cart);
        });

        state.subscribeInventory(() => {
            // view.renderInventory(state.inventory);
            view.renderInventory(state.getInventoryForPage(state.currentPageInventory));
        });

        model.getInventory().then((inventory) => {
            state.inventory = inventory;
            view.renderInventoryPagination(state.currentPageInventory, state.totalPagesInventory)
        });

        model.getCart().then((cart) => {
            state.cart = cart;
        });

        init();

    };
    return {
        bootstrap,
    };
})(Model, View);

Controller.bootstrap();
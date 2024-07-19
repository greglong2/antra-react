const View = (() => {
    // implement your logic for View

    const inventoryPaginationPagesPrevEl = document.querySelector('.inventory_pagination_prev-btn');
    const inventoryPaginationPagesNextEl = document.querySelector('.inventory_pagination_next-btn');
    const inventoryPaginationContianerEl = document.querySelector('.inventory_pagination-container');
    const inventoryPaginationPagesEL = document.querySelector('.inventory_pagination-pages');
    const inventoryContainerEl = document.querySelector(".inventory-container");
    const cartContainerEl = document.querySelector(".cart-container");
    const cartItemsEl = document.querySelector("#cart-items");
    const inventoryItemsEl = document.querySelector("#inventory-items");
    const checkoutBtnEl = document.querySelector(".checkout-btn");

    const renderInventory = (inventory) => {

        inventoryItemsEl.innerHTML = "";

        inventory.forEach(item => {
            const liEl = document.createElement("li");
            const pItemNameEl = document.createElement("p");
            const pAmountEl = document.createElement("span");
            const minusBtnEl = document.createElement("button");
            const plusBtnEl = document.createElement("button");
            const addCartBtnEl = document.createElement("button");

            liEl.id = item.id;

            pItemNameEl.textContent = item.content;

            pAmountEl.id = `item-${item.id}-amount`;
            pAmountEl.textContent = "0";

            minusBtnEl.className = "inventory_minus-btn";
            minusBtnEl.textContent = "-";
            plusBtnEl.className = "inventory_plus-btn";
            plusBtnEl.textContent = "+";

            addCartBtnEl.className = "add-cart-btn";
            addCartBtnEl.textContent = "add to cart";

            liEl.appendChild(pItemNameEl);
            liEl.appendChild(minusBtnEl);
            liEl.appendChild(pAmountEl);
            liEl.appendChild(plusBtnEl);
            liEl.appendChild(addCartBtnEl);

            inventoryItemsEl.appendChild(liEl);

        });
    }

    const renderCart = (cart) => {

        cartItemsEl.innerHTML = "";

        cart.forEach(item => {
            const liEl = document.createElement("li");
            const pItemNameEl = document.createElement("p");
            const deleteBtnEl = document.createElement("button");

            liEl.id = item.id;

            pItemNameEl.textContent = item.content + ` x ${item.amount}`;

            deleteBtnEl.className = "cart_delete-btn";
            deleteBtnEl.textContent = "delete";

            liEl.appendChild(pItemNameEl);
            liEl.appendChild(deleteBtnEl);

            cartItemsEl.appendChild(liEl);

        });
    }

    const renderCartPagination = (currentIndex, totalPages, cart) => {
        const pageButtonContainerEl = document.querySelector('.cart_pagination-pages');
        const pages = totalPages;

        pageButtonContainerEl.innerHTML = '';

        for (let i = 0; i < pages; i++) {
            const buttonEl = document.createElement('button');
            if (i === currentIndex) {
                buttonEl.className = 'cart_pagination_selected-btn';
            }
            else {
                buttonEl.className = 'cart_pagination_unselected-btn';
            }
            buttonEl.innerHTML = i + 1;
            buttonEl.id = i;

            pageButtonContainerEl.appendChild(buttonEl);
        }

        renderCart(cart);
    }

    const renderInventoryPagination = (currentIndex, totalPages) => {
        const pageButtonContainerEl = document.querySelector('.inventory_pagination-pages');
        const pages = totalPages;

        pageButtonContainerEl.innerHTML = '';


        console.log(pageButtonContainerEl, currentIndex, totalPages);
        for (let i = 0; i < pages; i++) {
            const buttonEl = document.createElement('button');
            if (i === currentIndex) {
                buttonEl.className = 'inventory_pagination_selected-btn';
            }
            else {
                buttonEl.className = 'inventory_pagination_unselected-btn';
            }
            buttonEl.innerHTML = i + 1;
            buttonEl.id = i;

            pageButtonContainerEl.appendChild(buttonEl);
        }

    }

    const render = (cart, inventory) => {
        renderInventory(inventory);
        renderCart(cart);
    }

    return {
        inventoryContainerEl,
        cartContainerEl,
        cartItemsEl,
        inventoryItemsEl,
        inventoryPaginationPagesEL,
        inventoryPaginationContianerEl,
        checkoutBtnEl,
        render,
        renderCart,
        renderInventory,
        renderCartPagination,
        renderInventoryPagination
    };
})();
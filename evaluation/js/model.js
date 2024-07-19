const Model = (() => {
    // implement your logic for Model
    class State {
        #onCartChange;
        #onInventoryChange;
        #inventory;
        #cart;
        #itemsPerPage;
        #currentPageInventory;
        #currentPageCart;
        constructor() {
            this.#inventory = [];
            this.#cart = [];
            this.#itemsPerPage = 5;
            this.#currentPageInventory = 0;
            this.#currentPageCart = 0;
        }
        get cart() {
            return this.#cart;
        }

        get inventory() {
            return this.#inventory;
        }

        get totalPagesCart() {
            return Math.ceil(this.#cart.length / this.#itemsPerPage);
        }

        get totalPagesInventory() {
            return Math.ceil(this.#inventory.length / this.#itemsPerPage);
        }

        get currentPageCart() {
            return this.#currentPageCart;
        }

        get currentPageInventory() {
            return this.#currentPageInventory;
        }

        get itemsPerPage() {
            return this.#itemsPerPage;
        }

        set currentPageCart(newPage) {
            this.#currentPageCart = newPage;
            this.notifyCart();
        }

        set currentPageInventory(newPage) {
            this.#currentPageInventory = newPage;
            this.notifyInventory();
        }

        set cart(newCart) {
            this.#cart = newCart;
            this.notifyCart();
        }
        set inventory(newInventory) {
            this.#inventory = newInventory;
            this.notifyInventory();
        }

        getCartForPage(pageNumber) {
            const start = pageNumber * this.#itemsPerPage;
            const end = start + this.#itemsPerPage;
            return this.#cart.slice(start, end);
        }

        getInventoryForPage(pageNumber) {
            const start = pageNumber * this.#itemsPerPage;
            const end = start + this.#itemsPerPage;
            return this.#inventory.slice(start, end);
        }

        subscribeCart(cb) {
            this.#onCartChange = cb;
        }

        subscribeInventory(cb) {
            this.#onInventoryChange = cb;
        }

        notifyCart() {
            this.#onCartChange();
        }

        notifyInventory() {
            this.#onInventoryChange();
        }
    }
    return {
        State,
        ...API
    };
})();
const API = (() => {
    const baseURL = "http://localhost:3001/regionalModelSales";
    const getSales = () => {
        return fetch(baseURL)
            .then(response => response.json())
    }
    return {
        getSales,
    }
})();

export default API;
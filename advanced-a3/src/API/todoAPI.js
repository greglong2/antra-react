const API = (() => {
    const baseURL = "http://localhost:3000/todos";
    const getTodos = () => {
        return fetch(baseURL)
            .then(response => response.json())
    }

    const createTodo = (newTodo) => {
        return fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        })
            .then(response => response.json());
    }

    const deleteTodo = (id) => {
        return fetch(`${baseURL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    }

    const editTodo = (id, title) => {
        return fetch(`${baseURL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title })
        }).then(response => response.json())
    }


    return {
        getTodos,
        createTodo,
        deleteTodo,
        editTodo
    }
})();

export default API;
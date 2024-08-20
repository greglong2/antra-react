import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";
import { render, screen, waitFor } from "@testing-library/react";

const mockData = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
    {
        "userId": 1,
        "id": 11,
        "title": "vero rerum temporibus dolor",
        "completed": true
    },
    {
        "userId": 1,
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true
    },
    {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false
    },
    {
        "userId": 1,
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true
    },
    {
        "userId": 1,
        "id": 15,
        "title": "ab voluptatum amet voluptas",
        "completed": true
    },
    {
        "userId": 1,
        "id": 16,
        "title": "accusamus eos facilis sint et aut voluptatem",
        "completed": true
    },
    {
        "userId": 1,
        "id": 17,
        "title": "quo laboriosam deleniti aut qui",
        "completed": true
    },
    {
        "userId": 1,
        "id": 18,
        "title": "dolorum est consequatur ea mollitia in culpa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 19,
        "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": true
    },
    {
        "userId": 1,
        "id": 20,
        "title": "ullam nobis libero sapiente ad optio sint",
        "completed": true
    },
    {
        "userId": 2,
        "id": 21,
        "title": "suscipit repellat esse quibusdam voluptatem incidunt",
        "completed": false
    },
    {
        "userId": 2,
        "id": 22,
        "title": "distinctio vitae autem nihil ut molestias quo",
        "completed": true
    },
    {
        "userId": 2,
        "id": 23,
        "title": "et itaque necessitatibus maxime molestiae qui quas velit",
        "completed": false
    },
    {
        "userId": 2,
        "id": 24,
        "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
        "completed": false
    },
    {
        "userId": 2,
        "id": 25,
        "title": "voluptas quo tenetur perspiciatis explicabo natus",
        "completed": true
    },
    {
        "userId": 2,
        "id": 26,
        "title": "aliquam aut quasi",
        "completed": true
    }
]

// TODO: Mock the fetch API, and do reset and clean up
beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
    }));
});

afterEach(() => {
    jest.resetAllMocks();
});

afterAll(() => {
    jest.clearAllMocks()
});

// TODO: Test component to render correctly with the fetched data
test("renders fetched todos on mount", async () => {
    render(<TodoList />);

    await waitFor(() => {
        // assert item exists in the list
        expect(screen.getByText("delectus aut autem")).toBeInTheDocument();
    });
});

// TODO: Test component to handle API fetch failure and display error message
test("handles API fetch failure", async () => {
    global.fetch.mockImplementationOnce(() => Promise.resolve({
        ok: false,
        fail: () => Promise.reject("Failed to fetch todos"),
    }));

    render(<TodoList />);

    await waitFor(() => {
        // assert item exists in the list
        expect(screen.getByText("Error: Failed to fetch todos")).toBeInTheDocument();
    });
});

// TODO: Test adding a new todo
test("adds a new todo item", async () => {
    render(<TodoList />);

    await waitFor(() => {
        // assert item exists in the list
        expect(screen.getByText("delectus aut autem")).toBeInTheDocument();
    });

    userEvent.type(screen.getByPlaceholderText("Enter todo"), "New todo");
    screen.getByText("Add Todo").click();

    await waitFor(() => {
        // assert item exists in the list
        expect(screen.getByText("New todo")).toBeInTheDocument();
    });
});

// TODO: Test removing a todo
test("removes a todo item", async () => {
    render(<TodoList />);

    await waitFor(() => {
        // assert item exists in the list
        expect(screen.getByText("delectus aut autem")).toBeInTheDocument();
    });

    userEvent.click(screen.getAllByText("Remove")[0]);

    await waitFor(() => {
        // assert item no longer exists in the list
        expect(screen.queryByText("delectus aut autem")).not.toBeInTheDocument();
    });


});

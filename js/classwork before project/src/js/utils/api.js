export const getTodos = () =>
    fetch('http://localhost:3004/notes').then(res => res.json());

export const updateByID = (id, data) => {
    fetch(`http://localhost:3004/notes/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data));
};
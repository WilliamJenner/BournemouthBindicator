// https://stackoverflow.com/a/49471725
export const api = (url) => {
    return fetch(url)
        .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .catch((error) => {
        throw error; /* <-- rethrow the error so consumer can still catch it */
    });
};

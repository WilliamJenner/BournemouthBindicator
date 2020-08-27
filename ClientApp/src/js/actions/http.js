// https://stackoverflow.com/a/49471725
export var api = function (url) {
    return fetch(url)
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .catch(function (error) {
        throw error; /* <-- rethrow the error so consumer can still catch it */
    });
};

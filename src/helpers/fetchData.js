const fetchData = () => new Promise((resolve, reject) => {
    fetch('https://www.reddit.com/r/funny.json')
        .then(response => response.json())
        .then(({
            data: {
                children: results = [],
            } = {},
        } = {}) => {
            resolve(results);
        })
        .catch((error) => {
            reject(error);
        });
});

export default fetchData;

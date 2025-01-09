export let fetchApi = async (movie) => {
    let response = await fetch(
        `https://www.omdbapi.com/?s=${movie}&apikey=522c6a`
    );
    let data = await response.json();
    return data;
};

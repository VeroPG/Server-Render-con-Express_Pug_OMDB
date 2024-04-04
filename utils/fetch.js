const getFilm = async (title) => {
    let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=b46fd856`);
    let film = await response.json();
    return film;
};

module.exports = {
    getFilm
}
const getMovieToken = (movieUrl) => {
    if(movieUrl.lastIndexOf('/') >= (movieUrl.length-1)) return 'INVALID_MOVIE_URL';

    const movieToken = movieUrl.substring(movieUrl.lastIndexOf('/')+1);

    return movieToken;
}

module.exports = getMovieToken;
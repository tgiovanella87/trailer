const {getMovieData} = require('./movieController');
const {getIdByMovieCode, getMovieTrailerById} = require('./traillerController');

const getTrailerByMovieUrl = async (movieUrl) => {
    
    const discoveredMovie = await getMovieData(movieUrl);

    if(discoveredMovie.error){
        return discoveredMovie;
    }

    const movieData = await getIdByMovieCode(discoveredMovie.data.id);

    if(movieData.error){
        return movieData;
    }
    const trailerData = await getMovieTrailerById(movieData.data.id);

    if(trailerData.error){
        return trailerData;
    }

    return trailerData;
}

module.exports = {
    getTrailerByMovieUrl
}
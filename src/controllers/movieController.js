const getMovieToken = require('../helpers/getMovieToken');
const axios = require('axios');

require('dotenv-safe').config();

const movieController = async (movieUrl) => {    
    const movieToken = getMovieToken(movieUrl);

    if(movieToken === 'INVALID_MOVIE_URL') return {error : true, data : {message: 'Invalid Movie URL'}};

    const movieData = await axios.get(`${process.env.VIAPLAY_API_URL}/${movieToken}`, {}).then(responseData => {
        const returnData = responseData.data._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.imdb;
        return {error: false, data : returnData};
    }).catch(error => {
        return {error: true, data : error.response.data};
    })
    return movieData;
}

module.exports = movieController;
const axios = require('axios');
require('dotenv-safe').config();


const getIdByMovieCode = async (movieCode) => {
    let apiUrl = process.env.TRAILER_FIND_URL;
    apiUrl = apiUrl.replace('{{API_KEY}}', process.env.TRAILER_API_KEY);
    apiUrl = apiUrl.replace('{{MOVIE_CODE}}', movieCode);

    const movieData = await axios.get(apiUrl, {}).then(responseData => {
        const returnData = responseData.data?.movie_results[0];

        if (!returnData) {
            return { error: true, data: { message: 'Movie not found' } }
        }

        return { error: false, data: { id: returnData.id, title: returnData.title } };

    }).catch(error => {
        return { error: true, data: error.response.data };
    })

    return movieData;

}

const getMovieTrailerById = async (movieId) => {
    let apiUrl = process.env.TRAILER_VIEW_URL;
    apiUrl = apiUrl.replace('{{API_KEY}}', process.env.TRAILER_API_KEY);
    apiUrl = apiUrl.replace('{{MOVIE_ID}}', movieId);

    try {
        const movieData = await axios.get(apiUrl, {}).then(responseData => {

            const trailerNode = responseData.data.results.find(
                (item) => (item.type = 'Trailer'),
            );

            if (!trailerNode) {
                return { error: true, data: responseData }
            }

            const trailerResultData = {
                id: movieId,
                name: trailerNode.name,
                type: trailerNode.type,
                official: trailerNode.official,
                trailer_url: `https://www.youtube.com/watch?v=${trailerNode.key}`
            }
            return { error: false, data: trailerResultData };

        }).catch(error => {
            return { error: true, data: error.response.data };
        })

        if(!movieData){            
            console.info(movieData);
        }
        return movieData;


    } catch (exception) {
        console.info(exception);
        return;
    }


}

module.exports = {
    getIdByMovieCode,
    getMovieTrailerById
}



const {getMovieData} = require('../src/controllers/movieController');

describe('Testing the movieController resources', () => {
    test('It Should return a movieData json by viaplay API that contains an ID', async () => {
        const movieUrl = 'https://content.viaplay.se/pc-se/film/arrival-2016';

        const responseData = await getMovieData(movieUrl);

        expect(responseData.id).not.toBeNull();
    });

    test('It should return a message of error for a wrong movie URL', async () => {
        const movieUrl = 'https://content.viaplay.se/pc-se/film/invalid';

        const responseData = await getMovieData(movieUrl);
        expect(responseData.error).toBeTruthy();
    })

    test('It should return a message of error for movie URL finished on /', async () => {
        const movieUrl = 'https://content.viaplay.se/pc-se/film/arrival-2016/';

        const responseData = await getMovieData(movieUrl);
        expect(responseData.error).toBeTruthy();
    })
});


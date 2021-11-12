const {getTrailerByMovieUrl} = require('../src/controllers/openRouteController');

describe('Testing the main controller, openRouteController', () => {
    test('It Should return a trailer by default', async () => {
        const movieUrl = 'https://content.viaplay.se/pc-se/film/arrival-2016';

        const responseData = await getTrailerByMovieUrl(movieUrl);
        expect(responseData.data.trailer_url).not.toBeNull();
    });

    test('It Should return an error for a wrong URL', async () => {
        const movieUrl = 'https://content.viaplay.se/pc-se/film/arrival-2016XXX';

        const responseData = await getTrailerByMovieUrl(movieUrl);        
        expect(responseData.status).not.toBe(200);
    });

    test('It Should return an error for a URL outside the viaplay domain ', async () => {
        const movieUrl = 'https://google.com';

        const responseData = await getTrailerByMovieUrl(movieUrl);        
        expect(responseData.status).not.toBe(200);
    });


});


const { getMovieTrailerById, getIdByMovieCode } = require('../src/controllers/traillerController');
require('dotenv-safe').config();

describe('Testing the trailerController resources', () => {

    const THE_ENV = process.env;

    beforeEach(async () => {
        process.env = { ...THE_ENV };
        delete process.env.NODE_ENV;
    })

    test('It should return a object with ID movie for a correct movie code', async () => {
        const movieCode = 'tt7711170';

        const responseData = await getIdByMovieCode(movieCode);

        expect(responseData.id).not.toBeNull();
    });

    test('It should return a message of error for a wrong movie Code', async () => {
        const movieCode = 'TTfailOnCode';

        const responseData = await getIdByMovieCode(movieCode);
        expect(responseData.error).toBeTruthy();
    })

    test('It should return a message `Movie not found` to wrong code', async () => {
        const movieCode = 'TTfailOnCode';

        const responseData = await getIdByMovieCode(movieCode);
        expect(responseData.data.message).toBe('Movie not found');
    })

    test('It should return a object with the youtube trailer for a right movie ID', async () => {
        const movieId = '509635';

        const responseData = await getMovieTrailerById(movieId);

        expect(responseData.id).not.toBeNull();
    });

    test('It should return a message of error for a wrong movie ID', async () => {
        const movieId = '';

        const responseData = await getMovieTrailerById(movieId);
        expect(responseData.error).toBeTruthy();
    })

    test('It should return the error code 34 to `The resource you requested could not be found` on wrong API URL to wrong Id', async () => {
        const movieId = '';

        const responseData = await getMovieTrailerById(movieId);
        
        expect(responseData.data.status_code).toBe(34);
    })

});


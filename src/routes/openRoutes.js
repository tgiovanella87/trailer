const {getTrailerByMovieUrl} = require('../controllers/openRouteController');
const cacheManager = require('cache-manager');
const getMovieToken = require('../helpers/getMovieToken');
const memoryCache = cacheManager.caching({store: 'memory', ttl: 500, max: 1500});

module.exports =  openRoutes = (app) => {

    app.route('/')
    .get((req, res) => {
        res.status(200).json({
            error : false,
            data : {
                message : 'OK. Server ready'
            }
        })
    })

    app.route('/movie')
    .get(async (req, res) => {
        const movieUrl = req.query.movie_url;
                        
        if(!movieUrl){
            res.status(400).json({error: true, data : {message : 'Query param `movie_url` is required'}});
            return;
        } 

        if(!/^https:\/\/content.viaplay.se\/pc-se\/film\/.*/.test(movieUrl)){
            res.status(400).json({error: true, data : {message : 'The informed URL is not valid'}});
            return;
        }

        const movieToken = getMovieToken(movieUrl);
        const cachedContent = await memoryCache.get(movieToken);

        if(cachedContent){
            res.status(200).json(cachedContent);
            return;
        }
        
        const trailerContent = await getTrailerByMovieUrl(movieUrl);
        await memoryCache.set(movieToken, trailerContent);

        if(trailerContent.error){
            res.status(406).json(trailerContent);
            return;
        }
        

        res.status(200).json(trailerContent);
    })
}
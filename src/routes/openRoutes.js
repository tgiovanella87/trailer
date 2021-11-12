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
}
const notess = require('./routes/formmodel');
const router = require('express');
const app = router();
module.exports = (app) => {
    app.use(router.json());


    app.use('/api/formmodel', notess);

    // app.use(function(err, req, res, next) {
    //     res.json({ 'error': err.message })
    // });
}
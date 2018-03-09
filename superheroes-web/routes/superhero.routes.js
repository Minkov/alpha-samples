const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();

    router
        .get('/', async (req, res) => {
            const superheroes = await data.superheroes.getAll();

            const context = {
                superheroes,
            };

            res.render('superheroes/list', context);
        })
        .get('/create', async (req, res) => {
            const alignments = await data.alignments.getAll();

            const context = {
                alignments,
            };

            res.render('superheroes/create', context);
        })
        .get('/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            const superhero = await data.superheroes.getById(+id);

            const model = {
                superhero,
            };

            res.render('superheroes/details', model);
        })
        .post('/', async (req, res) => {
            const superhero = req.body;

            superhero.AlignmentId = +superhero.AlignmentId;

            await data.superheroes.create(superhero);
            res.redirect('/superheroes');
        });

    app.use('/superheroes', router);
};

module.exports = {
    init,
};
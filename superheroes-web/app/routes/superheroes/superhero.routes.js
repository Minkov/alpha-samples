const {
    Router,
} = require('express');

const SuperheroesController = require('./superheroes.controller');

// dependency injection
// duck typing
const init = (app, data) => {
    const router = new Router();
    const controller = new SuperheroesController(data);

    router
        .get('/', async (req, res) => {
            const superheroes = await controller.getAll();
            const context = {
                superheroes,
            };
            res.render('superheroes/list', context);
        })
        .get('/create', async (req, res) => {
            const context = await controller.getCreateData();

            res.render('superheroes/create', context);
        })
        .get('/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            const superhero = await controller.getById(+id);

            const model = {
                superhero,
            };

            res.render('superheroes/details', model);
        })
        .post('/', async (req, res) => {
            const superheroModel = req.body;

            await controller.create(superheroModel);
            res.redirect('/superheroes');
        });

    // decorator design pattern
    app.use('/superheroes', router);
};

module.exports = {
    init,
};
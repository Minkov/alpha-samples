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
            const powers = await data.powers.getAll();

            const context = {
                alignments,
                powers,
            };

            res.render('superheroes/create', context);
        })
        .get('/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            const superhero = await data.superheroes.getById(+id);
            superhero.alignment = await superhero.getAlignment();
            superhero.powers = await superhero.getPowers();

            const model = {
                superhero,
            };

            res.render('superheroes/details', model);
        })
        .post('/', async (req, res) => {
            const superheroModel = req.body;
            const powersIds = Array.isArray(superheroModel.powerIdOrName) ?
                superheroModel.powerIdOrName : [superheroModel.powerIdOrName];

            const powers = await Promise.all(
                powersIds.map((id) => {
                    return data.powers.getById(+id);
                }));

            superheroModel.AlignmentId = +superheroModel.AlignmentId;

            const superhero = await data.superheroes.create(superheroModel);
            await superhero.setPowers(powers);
            res.redirect('/superheroes');
        });

    app.use('/superheroes', router);
};

module.exports = {
    init,
};
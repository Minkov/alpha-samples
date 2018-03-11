/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');

const init = (app, data) => {
    app.get('/', async (req, res) => {
        const viewName = 'home';

        const superheroes = await data.superheroes.getAll();

        const model = {
            superheroes,
        };

        res.render(viewName, model);
    });
    /** dynamically load all routes */
    fs.readdirSync(__dirname)
        .filter((filename) => filename !== path.basename(__filename))
        .filter((filename) => filename !== 'index.js')
        .map((filename) => path.join(__dirname, filename))
        .forEach((modulePath) => {
            require(modulePath).init(app, data);
        });


    app.get('/:name', (req, res) => {
        const name = req.params.name;

        const model = {
            name,
        };

        res.render('say-name', model);
    });
};

module.exports = {
    init,
};

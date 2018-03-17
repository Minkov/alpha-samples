const viewRoutes = require('./superhero.routes');
const apiRoutes = require('./superheroes.api.routes');

const init = (app, data) => {
    viewRoutes.init(app, data);
    apiRoutes.init(app, data);
};

module.exports = {
    init,
};

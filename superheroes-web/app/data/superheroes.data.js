const Data = require('./generic.data');
const {
    Superhero,
    Power,
} = require('../db/models');

class SuperheroesData extends Data {
    constructor() {
        super(Superhero, [Power]);
    }

    _isObjectValid(obj) {
        return !!obj;
    }
}

module.exports = SuperheroesData;

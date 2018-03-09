const {
    Superhero,
    Alignment,
} = require('./db/models');

const superheroes = {
    getAll() {
        return Superhero.findAll();
    },
    getById(id) {
        return Superhero.findById(id);
    },
    create(superhero) {
        return Superhero.create(superhero);
    },
};

const alignments = {
    getAll() {
        return Alignment.findAll();
    },
    getById(id) {
        return Alignment.findById(id);
    },
    create(alignment) {
        return Alignment.create(alignment);
    },
};

module.exports = {
    superheroes,
    alignments,
};

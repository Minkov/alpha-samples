const {
    Superhero,
    sequelize,
} = require('./models');


const run = async () => {
    await sequelize.sync();
    Superhero.create({

    });
};
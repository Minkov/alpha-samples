const {
    expect,
} = require('chai');

const Controller = require('../../../app/routes/superheroes/superheroes.controller');

let superheroesArray = [];
let powersArray = [];
let alignmentsArray = [];

const fakeData = {
    superheroes: {
        getById(id) {
            return superheroesArray.find((hero) => hero.id === id);
        },
        getAll() {
            return superheroesArray;
        },
        create(superhero) {
            superhero.setPowers = () => {};
            return superhero;
        }
    },
    powers: {
        getAll() {
            return powersArray;
        },
        getById(id) {
            return {};
        }
    },
    alignments: {
        getAll() {
            return alignmentsArray;
        }
    }
};

// 3A
// Arrange, Act, Assert

describe('SuperheroesController', () => {
    describe('getAll()', () => {
        it('when no superheroes, expect empty array', async () => {
            // Arrange
            superheroesArray = [];
            const controller = new Controller(fakeData);

            // Act
            const superheroes = await controller.getAll();

            // Assert
            expect(superheroes).to.be.empty;
        });
    });

    describe('getById()', () => {
        it('when superhero with this ID is available, expect the superhero', async () => {
            const id = 1;
            superheroesArray = [{
                id,
                name: 'Superhero name',
                getAlignment() {},
                getPowers() {},
            }];

            const controller = new Controller(fakeData);

            // Act
            const superhero = await controller.getById(id);

            // Assert
            expect(superhero).to.exist;
            expect(superhero.id).to.eq(id);
        });
    });

    describe('create', () => {
        describe('when data is valid', () => {
            it('expect to be created', async () => {
                const superhero = {
                    name: 'Batman',
                    secretIdentity: 'Bruce Wayne',
                    powerIdOrName: 1,
                    AlignentId: 1,
                };

                const controller = new Controller(fakeData);
                const createdSuperhero = await controller.create(superhero);
                expect(createdSuperhero).to.exist;
            });
        });
    });

    describe('getCreateData', () => {
        describe('when no powers and alignments', () => {
            it('expect to return empty arrays', async () => {
                powersArray = [];
                alignmentsArray = [];

                const controller = new Controller(fakeData);

                const result = await controller.getCreateData();
                expect(result).to.exist;
                expect(result.powers).to.be.empty;
                expect(result.alignments).to.be.empty;
            });
        });
    });
});
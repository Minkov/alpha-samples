class SuperheroesController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const superheroes = this.data.superheroes.getAll();
        return superheroes;
    }

    async getById(id) {
        const superhero = await this.data.superheroes.getById(id);
        superhero.alignment = await superhero.getAlignment();
        superhero.powers = await superhero.getPowers();
        return superhero;
    }

    async create(superheroModel) {
        const powersIds = Array.isArray(superheroModel.powerIdOrName) ?
            superheroModel.powerIdOrName : [superheroModel.powerIdOrName];

        const powers = await Promise.all(
            powersIds.map((id) => {
                return this.data.powers.getById(+id);
            }));

        superheroModel.AlignmentId = +superheroModel.AlignmentId;

        const superhero = await this.data.superheroes.create(superheroModel);
        await superhero.setPowers(powers);
        return superhero;
    }

    async getCreateData() {
        const [alignments, powers] =
        await Promise.all([
            this.data.alignments.getAll(),
            this.data.powers.getAll(),
        ]);

        return {
            alignments,
            powers,
        };
    }
}

module.exports = SuperheroesController;
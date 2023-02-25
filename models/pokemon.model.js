module.exports = (sequelize, Sequelize) => {
    const Pokemon = sequelize.define("pokemon", {
        name: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });

    return Pokemon;
};
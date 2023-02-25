module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        full_name: {
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

    return User;
};
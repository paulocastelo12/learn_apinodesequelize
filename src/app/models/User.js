module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      phone: {
        type: DataTypes.DOUBLE,
        validate: {
          len: [8, 12],
        },
      },
      currentdate: {
        type: DataTypes.STRING
      },
    });
  
    return User;
  };
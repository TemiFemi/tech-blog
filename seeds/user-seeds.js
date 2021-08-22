const { User
} = require('../models');

const userData = [
    {
        username: "temi_femi",
        twitter: "dolphTemi",
        github: "temi_femi",
        email: "temi22@gmail.com",
        password: "password1"
    },
    {
        username: "mike_z",
        twitter: "mikeisdagoat",
        github: "mike_z",
        email: "mike_z@gmail.com",
        password: "password2"
    },
    {
        username: "daniel_ross",
        twitter: "dantheman",
        github: "daniel_ross",
        email: "daniel_ross@gmail.com",
        password: "password3"
    },
    {
        username: "brandon_cowley",
        twitter: "brantheman",
        github: "brandon_cowley",
        email: "brandon_cowley@gmail.com",
        password: "password4"
    },
    {
        username: "trent_h",
        twitter: "trent1234",
        github: "trent_h",
        email: "trent_h@gmail.com",
        password: "password5"
    },
    {
        username: "ryanthebulldog",
        twitter: "ryguy",
        github: "ryanthebulldog",
        email: "ryan@gmail.com",
        password: "password6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
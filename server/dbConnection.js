const pgp = require('pg-promise')();

const clientLink = 'postgres://localhost:5432/outsidehacks';

module.exports = pgp(clientLink);
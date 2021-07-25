const { Pool, Client } = require("pg");


class PGClient {

    constructor(config) {
        this.credentials = {
            user: config.user,
            host: 'localhost',
            database: config.database,
            password: config.password,
            port: config.ports,
        }
    }

    async runStatement(query, params) {
        let pool = new Pool(this.credentials);
        let now = await pool.query(query, params);
        await pool.end();      
        return now.rows;
    }
}

module.exports = PGClient;
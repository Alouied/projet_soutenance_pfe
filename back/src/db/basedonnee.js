const Client = require("pg").Client;

const client = new Client({
    user: "postgres",
    password: "Imvampire123",
    host: "localhost",
    port: 5432,
    database: "sitebase",
});

client.connect(function(err) {
    if (err) throw (err);
    console.log("Connected!");
});

module.exports = client;

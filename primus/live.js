module.exports.go = (server) => {
    const Primus = require("primus");
    const primus = new Primus(server);
  
    //check if connection, then console.log it
    primus.on("connection", (spark) => {
        console.log("connection alive");
        spark.on("data", (data) => {
            console.log(data);
            primus.write(data);
        });
    });
};
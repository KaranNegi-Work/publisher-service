const express =  require("express");
const bodyParser = require("body-parser");
const app = express()
const config = require("./configs/config")

const startServer = async() => {
app.use(bodyParser.json("application/json"));
app.use(require("./src/routes/server"))
app.listen(config.port, ()=>{
    console.log(`Server Started at ${config.port}....`);
})
}

startServer();

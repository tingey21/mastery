require('dotenv').config();
const bodyParser = require("body-parser")
    , express = require('express')
    , massive = require('massive')
    , userCtrl = require("./controllers/userCtrl")
    , cors = require("cors")


const app = express();
app.use(cors());
app.use(bodyParser.json());
const connection = "postgres://tqtsfntsasljkw:ac4f1bdee7a5bc3721cfd301267e11020b8151e06d225367b327c83e338cf769@ec2-107-21-201-57.compute-1.amazonaws.com:5432/deq4cibfrsob9m?ssl=true"
massive(connection)
.then((db)=> {
    console.log("Database connected")
    app.set('db', db)
}).catch(err => console.log(err))

app.get("/api/users", userCtrl.getUsers)
app.get("/api/users/:id", userCtrl.getByID)
app.put("/api/users/:id", userCtrl.updateById)
app.post("/api/users", userCtrl.addUser)
app.delete("/api/users", userCtrl.delete)


app.listen(8080, () => console.log('g'))
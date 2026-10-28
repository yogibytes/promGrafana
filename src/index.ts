import express, { Request, Response, NextFunction } from "express"
import {metricMiddleware} from './metric/index.js'

const app = express();
app.use(express.json());

const PORT = 3000;
let user = {

    name: "aman",
    age : 20
}

// app.use(metricMiddleware);
app.post('/updateName', (req, res) => {
    const { name } = req.body;
    user.name = name;
    res.json({
        msg: "updated the name now send the /name",
    })
})



app.get('/name', (req, res) => {
    res.json({
        msg: "hi there from the backend ",
        name:user.name
    })
})

app.listen(PORT,()=> console.log(
    `server is listening at port ${PORT}`)
);
    
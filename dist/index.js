import express from "express";
import client from 'prom-client';
import { metricMiddleware } from './metric/index.js';
const app = express();
app.use(express.json());
const PORT = 3000;
let user = {
    name: "aman"
};
app.post('/updateName', (req, res) => {
    const { name } = req.body;
    user.name = name;
    res.json({
        msg: `updated the name now send the ${name}`,
    });
});
app.use(metricMiddleware);
app.get('/name', async (req, res) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    res.json({
        msg: "hi there from the backend ",
        name: user.name
    });
});
app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
});
app.listen(PORT, () => console.log(`server is listening at port ${PORT}`));
//# sourceMappingURL=index.js.map
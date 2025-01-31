import ViteExpress from "vite-express";
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config()
const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
const client = new MongoClient(MONGO_CONNECTION_STRING);
const database = client.db('portfolio');

app.use((req, res, next) => {
    const allowedOrigins = ['https://portfolio-566e.onrender.com', 'http://localhost:3001'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    };
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.use(express.json());

app.get('/api/projects/latest', async (_, response) => {
    const data = database.collection('projects').find().sort({ _id: -1 });

    response.json(await data.toArray());
});

app.get('/api/projects/:id', async (request, response) => {
    const { id } = request.params;

    const data = await database.collection('projects').findOne({ _id: new ObjectId(id) });

    response.json(data);
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
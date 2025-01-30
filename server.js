import ViteExpress from "vite-express";
import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const PORT = 3000;
const MONGO_USER = 'liva';
const MONGO_PASSWORD = 'L7a6Bt76TtSmCdEL';
const MONGO_CONNECTION_STRING = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.4itoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
const client = new MongoClient(MONGO_CONNECTION_STRING);
const database = client.db('portfolio');

app.use(express.json());

app.get('/api/projects/latest', async (_, response) => {
    const data = database.collection('projects').find().sort({_id: -1});

    response.json(await data.toArray());
});

app.get('/api/projects/:id', async (request, response) => {
    const { id } = request.params;

    const data = await database.collection('projects').findOne({ _id: new ObjectId(id) });

    response.json(data);
});

ViteExpress.listen(app, PORT, () => console.log(`Server running on http://localhost:${PORT}`));
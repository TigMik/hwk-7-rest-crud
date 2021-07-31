import express from 'express'
import routes from './routes/routes.js'

const app = express();
const port = 3085;

app.use(express.json());
app.use('/students', routes);

app.get('/', (req, res) => {
    res.send('Hello API!')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
})


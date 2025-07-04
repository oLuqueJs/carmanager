import 'dotenv/config';
import express from 'express';
import carRoutes from './src/routes/carRoute.js';
import { requestLogger } from './src/middlewares/requestLogger.js';

const app = express()
const port = process.env.PORT

app.use(requestLogger);
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/cars', carRoutes)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
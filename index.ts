import express, { Express } from 'express';
import UserRouter from './routes/UserRoutes';

const app: Express = express();
const PORT: number = 3000;

app.use(express.json());
app.use('/user',UserRouter);

app.listen(PORT, () => {
    console.log("\x1b[1m\x1b[4m\x1b[34m%s\x1b[0m", `Server is running on port ${PORT} (http://localhost:${PORT})`);
})
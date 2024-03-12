import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT: number = 3000;

app.get('/', (request, response) => {
    response.send('Hello, express ts!!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} (http://localhost:${PORT})`);
})
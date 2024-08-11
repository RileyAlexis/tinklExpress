import express from 'express';
import { Router } from "express";

const app = express();
const port = 5001;

app.get('/', (req, res) => {
    res.send('This thing is working get route /');
    console.log('Route called')
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server Running at http://0.0.0.0:${port}`);
})

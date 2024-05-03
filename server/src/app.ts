import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.render('index.njk');
});

export default app;

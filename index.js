import express from 'express';
import { UsersRouter } from './routes/users.js';
import { CoinRouter } from './routes/coin.js';


const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('working: santiago');});
app.use(express.json());

app.use('/users', UsersRouter.router());
app.use('/coin', CoinRouter.router());

app.listen(PORT, () => {
  console.log(`Servidor en el Puerto ${PORT}`);
});

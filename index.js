import express from 'express';
import { UsersRouter } from './routes/users.js';
import { CoinRouter } from './routes/coin.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', UsersRouter.router());
app.use('/coin', CoinRouter.router());

app.listen(PORT, () => {
  console.log(`Servidor en el Puerto ${PORT}`);
});

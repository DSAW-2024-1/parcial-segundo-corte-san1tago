import express from 'express';
import fetch from 'node-fetch';

const API_COINCAP = 'https://api.coincap.io/v2/assets/';

export class CoinRouter {
  static router() {
    const router = express.Router();

    router.get('/:coinName', async (req, res) => {
      const { coinName } = req.params;

      try {
        const response = await fetch(`${API_COINCAP}${coinName}`);
        const data = await response.json();
        const price = data.data.priceUsd;

        res.send(`El precio en dólares de la moneda ${coinName} para el día de hoy es ${price}`);
      } catch (error) {
        res.status(404).send('El nombre de la moneda no fue encontrado en la base de datos');
      }
    });

    return router;
  }
}
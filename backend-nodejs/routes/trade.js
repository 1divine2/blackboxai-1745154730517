const express = require('express');
const router = express.Router();

// Mock user portfolio data
let userPortfolio = {
  BTC: 0.5,
  ETH: 2,
  SOL: 10,
  AVAX: 100,
};

// Buy crypto
router.post('/buy', (req, res) => {
  const { symbol, amount } = req.body;
  if (!symbol || !amount || amount <= 0) {
    return res.status(400).json({ message: 'Invalid symbol or amount' });
  }
  userPortfolio[symbol] = (userPortfolio[symbol] || 0) + amount;
  res.json({ message: `Bought ${amount} ${symbol}`, portfolio: userPortfolio });
});

// Sell crypto
router.post('/sell', (req, res) => {
  const { symbol, amount } = req.body;
  if (!symbol || !amount || amount <= 0) {
    return res.status(400).json({ message: 'Invalid symbol or amount' });
  }
  if (!userPortfolio[symbol] || userPortfolio[symbol] < amount) {
    return res.status(400).json({ message: `Not enough ${symbol} to sell` });
  }
  userPortfolio[symbol] -= amount;
  res.json({ message: `Sold ${amount} ${symbol}`, portfolio: userPortfolio });
});

// Get portfolio
router.get('/portfolio', (req, res) => {
  res.json(userPortfolio);
});

module.exports = router;

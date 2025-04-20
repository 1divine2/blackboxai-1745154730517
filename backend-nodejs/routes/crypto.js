const express = require('express');
const router = express.Router();

// Mock crypto data
const cryptoData = [
  { symbol: 'BTC', name: 'Bitcoin', price: 28000 },
  { symbol: 'ETH', name: 'Ethereum', price: 1800 },
  { symbol: 'SOL', name: 'Solana', price: 22 },
  { symbol: 'AVAX', name: 'Avalanche', price: 15 },
];

// Get all crypto data
router.get('/', (req, res) => {
  res.json(cryptoData);
});

// Get crypto by symbol
router.get('/:symbol', (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  const crypto = cryptoData.find(c => c.symbol === symbol);
  if (!crypto) return res.status(404).json({ message: 'Crypto not found' });
  res.json(crypto);
});

module.exports = router;

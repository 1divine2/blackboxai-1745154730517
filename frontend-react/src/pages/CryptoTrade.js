import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CryptoTrade() {
  const [cryptos, setCryptos] = useState([]);
  const [portfolio, setPortfolio] = useState({});
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchCryptos();
    fetchPortfolio();
  }, []);

  const fetchCryptos = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/crypto');
      setCryptos(res.data);
      if (res.data.length > 0) setSelectedCrypto(res.data[0].symbol);
    } catch (err) {
      console.error('Error fetching cryptos', err);
    }
  };

  const fetchPortfolio = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/trade/portfolio');
      setPortfolio(res.data);
    } catch (err) {
      console.error('Error fetching portfolio', err);
    }
  };

  const handleBuy = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setMessage('Please enter a valid amount');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/trade/buy', {
        symbol: selectedCrypto,
        amount: parseFloat(amount),
      });
      setMessage(res.data.message);
      setPortfolio(res.data.portfolio);
      setAmount('');
    } catch (err) {
      setMessage('Error buying crypto');
    }
  };

  const handleSell = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setMessage('Please enter a valid amount');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/trade/sell', {
        symbol: selectedCrypto,
        amount: parseFloat(amount),
      });
      setMessage(res.data.message);
      setPortfolio(res.data.portfolio);
      setAmount('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error selling crypto');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Divine Crypto Trading</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Select Crypto</label>
          <select
            value={selectedCrypto}
            onChange={(e) => setSelectedCrypto(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            {cryptos.map((crypto) => (
              <option key={crypto.symbol} value={crypto.symbol}>
                {crypto.name} ({crypto.symbol}) - €{crypto.price}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter amount"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={handleBuy}
            className="flex-grow bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Buy
          </button>
          <button
            onClick={handleSell}
            className="flex-grow bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Sell
          </button>
        </div>
        {message && <p className="text-center text-indigo-600 font-semibold">{message}</p>}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Your Portfolio</h2>
          <ul>
            {Object.entries(portfolio).map(([symbol, qty]) => (
              <li key={symbol}>
                {symbol}: {qty.toFixed(4)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

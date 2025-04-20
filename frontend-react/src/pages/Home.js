import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Divine Crypto</h1>
          <nav className="space-x-4">
            <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-semibold">Sign Up</Link>
            <Link to="/login" className="text-indigo-600 hover:text-indigo-800 font-semibold">Log In</Link>
            <Link to="/trade" className="text-indigo-600 hover:text-indigo-800 font-semibold">Trade</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Trade Bitcoin with zero fees</h2>
          <p className="text-lg text-gray-700 mb-6">
            Zero-fee Bitcoin trading with no commissions and no added spreads from Divine Crypto. Sign up today and get €10 in crypto.*
          </p>
          <Link to="/signup" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition">
            Continue
          </Link>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Buy and sell 40+ crypto with euros at the lowest average costs</h3>
          <p className="text-gray-600 mb-6">We had experts check the math.**</p>
          {/* Crypto comparison table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md shadow">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Crypto Platform</th>
                  <th className="px-4 py-2 border">Crypto You'd Receive</th>
                  <th className="px-4 py-2 border">Robinhood</th>
                  <th className="px-4 py-2 border">Coinbase</th>
                  <th className="px-4 py-2 border">Kraken</th>
                  <th className="px-4 py-2 border">Bitpanda</th>
                  <th className="px-4 py-2 border">Binance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">BTC</td>
                  <td className="border px-4 py-2">0.026766 ETH</td>
                  <td className="border px-4 py-2">—</td>
                  <td className="border px-4 py-2">0.025451 ETH</td>
                  <td className="border px-4 py-2">-4.91%</td>
                  <td className="border px-4 py-2">0.025990 ETH</td>
                  <td className="border px-4 py-2">-2.90%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">ETH</td>
                  <td className="border px-4 py-2">0.026328 ETH</td>
                  <td className="border px-4 py-2">-1.63%</td>
                  <td className="border px-4 py-2">0.026630 ETH</td>
                  <td className="border px-4 py-2">-0.51%</td>
                  <td className="border px-4 py-2">—</td>
                  <td className="border px-4 py-2">—</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">SOL</td>
                  <td className="border px-4 py-2">0.026630 ETH</td>
                  <td className="border px-4 py-2">-0.51%</td>
                  <td className="border px-4 py-2">—</td>
                  <td className="border px-4 py-2">—</td>
                  <td className="border px-4 py-2">—</td>
                  <td className="border px-4 py-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img src="https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/crypto-transfers__2e7710298eca2c9e7cf7b7957a3a11919409896c263b4674ecc6f636ff1c2ba4.png" alt="Transfer" className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Send and receive crypto</h4>
            <p className="text-gray-600">Send and receive crypto to and from other wallets safely and securely.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img src="https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/product-staking__8df8a60199bf46c6d21ae006216130cfa254c2603a9287cf2d7bbdf9159d585a.png" alt="Stake" className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Get more SOL & ETH with a 100% earnings match</h4>
            <p className="text-gray-600">Earn a competitive rate when you stake SOL & ETH. Plus, we’ll match your earnings for a limited time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img src="https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/crypto-product-phone__5f4bc0c2a18f9655fa5c721b3da39dac4a1eaef3086169b5694b198c40ee8653.svg" alt="Earn" className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Get 10% rewards on your AVAX holdings</h4>
            <p className="text-gray-600">Earn AVAX rewards just for holding AVAX.</p>
          </div>
        </section>
      </main>

      <footer className="bg-white shadow mt-12 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">You’ve got questions. We’ve got answers</p>
            <p className="text-gray-600">Email us anytime at <a href="mailto:cryptoeusupport@divinecrypto.com" className="text-indigo-600 hover:underline">cryptoeusupport@divinecrypto.com</a></p>
          </div>
          <div className="flex space-x-4">
            <a href="https://apps.apple.com/app/divine-crypto/id6467049008" target="_blank" rel="noopener noreferrer">
              <img src="https://images.ctfassets.net/5ft2qdzfrz9o/6VdhicjCB7Ha2JBNihYkxy/3adff403a78fa26fce4cbaf4d9c67ab1/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" className="h-12" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.divinecrypto.global" target="_blank" rel="noopener noreferrer">
              <img src="https://images.ctfassets.net/5ft2qdzfrz9o/41IcWq12OsUWvJKaKu1ktn/77eebee3e6394846966586f6aa7cf565/GetItOnGooglePlay_Badge_Web_color_English.svg" alt="Get it on Google Play" className="h-12" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

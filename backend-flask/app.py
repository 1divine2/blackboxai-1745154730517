from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/divinecrypto'
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_here'  # Replace with env variable in production

mongo = PyMongo(app)
jwt = JWTManager(app)
CORS(app)

users_collection = mongo.db.users

# Register
@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if users_collection.find_one({'email': email}):
        return jsonify({'message': 'Email already registered'}), 400

    password_hash = generate_password_hash(password)
    users_collection.insert_one({
        'username': username,
        'email': email,
        'password_hash': password_hash,
        'created_at': datetime.datetime.utcnow()
    })

    access_token = create_access_token(identity=email)
    return jsonify({'token': access_token, 'user': {'username': username, 'email': email}})

# Login
@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = users_collection.find_one({'email': email})
    if not user or not check_password_hash(user['password_hash'], password):
        return jsonify({'message': 'Invalid credentials'}), 400

    access_token = create_access_token(identity=email)
    return jsonify({'token': access_token, 'user': {'username': user['username'], 'email': email}})

# Mock crypto data
crypto_data = [
    {'symbol': 'BTC', 'name': 'Bitcoin', 'price': 28000},
    {'symbol': 'ETH', 'name': 'Ethereum', 'price': 1800},
    {'symbol': 'SOL', 'name': 'Solana', 'price': 22},
    {'symbol': 'AVAX', 'name': 'Avalanche', 'price': 15},
]

@app.route('/api/crypto', methods=['GET'])
def get_crypto():
    return jsonify(crypto_data)

# Mock user portfolio
user_portfolio = {
    'BTC': 0.5,
    'ETH': 2,
    'SOL': 10,
    'AVAX': 100,
}

@app.route('/api/trade/buy', methods=['POST'])
def buy_crypto():
    data = request.get_json()
    symbol = data.get('symbol')
    amount = data.get('amount')
    if not symbol or not amount or amount <= 0:
        return jsonify({'message': 'Invalid symbol or amount'}), 400
    user_portfolio[symbol] = user_portfolio.get(symbol, 0) + amount
    return jsonify({'message': f'Bought {amount} {symbol}', 'portfolio': user_portfolio})

@app.route('/api/trade/sell', methods=['POST'])
def sell_crypto():
    data = request.get_json()
    symbol = data.get('symbol')
    amount = data.get('amount')
    if not symbol or not amount or amount <= 0:
        return jsonify({'message': 'Invalid symbol or amount'}), 400
    if user_portfolio.get(symbol, 0) < amount:
        return jsonify({'message': f'Not enough {symbol} to sell'}), 400
    user_portfolio[symbol] -= amount
    return jsonify({'message': f'Sold {amount} {symbol}', 'portfolio': user_portfolio})

@app.route('/api/trade/portfolio', methods=['GET'])
def get_portfolio():
    return jsonify(user_portfolio)

if __name__ == '__main__':
    app.run(port=5001, debug=True)

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Configure CORS to allow requests from localhost:3000
CORS(app, resources={r"/test": {"origins": "http://localhost:3000"}})

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/test')
def test():
    return {'message': 'Connection successful'}

if __name__ == '__main__':
    app.run(debug=True)

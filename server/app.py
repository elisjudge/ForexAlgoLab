from flask import Flask
from api.routes.test import test_route
from flask_cors import CORS

from database.setup import setup_database

app = Flask(__name__)

setup_database()


cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'




app.register_blueprint(test_route, url_prefix ='/api')

@app.route('/')
def index():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)

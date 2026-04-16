from flask import Flask
from flask_cors import CORS


# create a new flask app
app = Flask(__name__)


# allow secret key and CORS so HTMX can communicate with the backend seamisly
app.secret_key = 'super-secret-ultra-safe-key'
CORS(app, supports_credentials=True) 


@app.route('/')
def home():
	return '<h1>Hello World!</h1>'


if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0', port=5000)

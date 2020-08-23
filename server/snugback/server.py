from flask import Flask

app = Flask(__name__)

import snugback.routes

if __name__ == "__main__":
    app.run(threaded=True)

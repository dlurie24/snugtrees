from snugback.server import app
from snugback.api import *

@app.route('/soundcloud/<string:name>')
def getSoundCloudLinks(name):
    return getSoundCloudLinks(name)


@app.route('/youtube/<string:name>')
def getYouTubeLinks(name):
    return getYouTubeLinks(name)

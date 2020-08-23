from snugback.server import app
import snugback.api as api

@app.route('/soundcloud/<string:name>', methods=['GET'])
def getSoundCloudLinks(name):
    return api.getSoundCloudLinks(name)


@app.route('/youtube/<string:name>', methods=['GET'])
def getYouTubeLinks(name):
    return api.getYouTubeLinks(name)

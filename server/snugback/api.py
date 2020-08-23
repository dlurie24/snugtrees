import urllib
import json
import snugback.constants as const

def getSoundCloudLinks(name):
  return name

def getYouTubeLinks(name):
  name = name.lower()
  if name == const.SNUGTREES:
    links = getAllVideosFromChannel(const.snug_channelID)
  elif name == const.SECOND_FLOOR_BAND:
    links = getAllVideosFromChannel(const.sfb_channelID)
  elif name == const.THE_WHAT_WHY:
    links = getAllVideosFromChannel(const.tww_channelID)
  else:
    return {'links': []}
  return {'links': links}


# ~ ~ ~ ~
# HELPERS
# ~ ~ ~ ~

def getAllVideosFromChannel(channel_id):
    api_key = const.API_KEY

    base_video_url = 'https://www.youtube.com/watch?v='
    base_search_url = 'https://www.googleapis.com/youtube/v3/search?'

    first_url = base_search_url+'key={}&channelId={}&part=snippet,id&order=date&maxResults=25'.format(api_key, channel_id)

    video_links = []
    url = first_url
    while True:
        inp = urllib.request.urlopen(url)
        resp = json.load(inp)

        for i in resp['items']:
            if i['id']['kind'] == "youtube#video":
                video_links.append(base_video_url + i['id']['videoId'])

        try:
            next_page_token = resp['nextPageToken']
            url = first_url + '&pageToken={}'.format(next_page_token)
        except:
            break
    return video_links
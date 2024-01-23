### State stored in reducers
* connection
  - streamURL: URL of the source of the stream (API)
  - protocol: protocol used for streaming audio (webrtc by default)
* radio
  - currentStation: station to which the user is currently listening, set to `null` if no station has yet been selected,
  contains the same data of the station as the specified in radioData
  - radioData: array containing avaible radio channels, each channel has:
    - audioUrls: URLs of audio streams using different protocols, including:
      - hls
      - rtmp
      - srt
      - webrtc
    - currentClientsNumber: nuber of user subscribed  to the channel
    - dataURL: url of API endpoint containing data about the channel
    - decription: description of the channel
    - path: path to API (doing what?)
    - title: title of the channel

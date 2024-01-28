### State stored in reducers
* connection
  - streamURL: URL of the source of the stream (API)
  - protocol: protocol used for streaming audio (hls by default)
* radio
  - currentStation: station to which the user is currently listening, set to `null` if no station has yet been selected,
  contains the same data of the station as the specified in radioData
  - currentStationId: id of currentStation (same as currentStation.id if current station is no `null`), set to `-1` if no station is selected
  - radioData: array containing avaible radio channels, each channel has:
    - audioUrls: URLs of audio streams using different protocols, including:
      - hls
      - rtmp
      - rtsp
      - srt
      - webrtc
    - currentClientsNumber: nuber of user subscribed  to the channel
    - dataURL: url of API endpoint containing data about the channel
    - decription: description of the channel
    - path: path to API (doing what?)
    - title: title of the channel
* sound
  - soundProfile: mono or stereo (default)
  - playing: (boolean, true by default) whether the radio is playing
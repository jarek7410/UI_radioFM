const initState = {
    radioData: [{
        "audioUrls":
            {
                "hls":"http://localhost:8888/radio_zet/index.m3u8",
                "rtmp":"rtmp://localhost:1935/radio_zet",
                "rtsp":"rtsp://localhost:8554/radio_zet",
                "srt":"srt://localhost:8890?streamid=read:radio_zet",
                "webrtc":"http://localhost:8889/radio_zet"
            },
        "currentClientsNumber":0,
        "dataUrl":"localhost:3000/v1/rooms/radio_zet/data",
        "description":"Stacja radiowa FM",
        "maxClientsNumber":10,
        "path":"/radio_zet",
        "title":"Radio ZET"
    },
        {
            "audioUrls":
                {
                    "hls":"http://localhost:8888/rmf_fm/index.m3u8",
                    "rtmp":"rtmp://localhost:1935/rmf_fm",
                    "rtsp":"rtsp://localhost:8554/rmf_fm",
                    "srt":"srt://localhost:8890?streamid=read:rmf_fm",
                    "webrtc":"http://localhost:8889/rmf_fm"
                },
            "currentClientsNumber":0,
            "dataUrl":"localhost:3000/v1/rooms/rmf_fm/data",
            "description":"Stacja radiowa FM",
            "maxClientsNumber":10,
            "path":"/rmf_fm",
            "title":"RMF FM"
        }]
}

const radioReducer = (state = initState, action) => {
    if (!action.type) {
        console.log('Action', action, 'has no type');
        return state;
    }

    switch(action.type) {
        case "SET_RADIO_DATA":
            return {
                ...state,
                radioData : action.radioData,
            }
    }

    return state;
}

export default radioReducer
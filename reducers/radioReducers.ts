import { addIdsToObjArray } from "../src/helper/utilHelper";

const radioDataWithIds = addIdsToObjArray([{
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
    },
    {
        "audioUrls":
            {
                "hls":"https://pl.streamingvideoprovider.com/mp3-playlist/playlist.m3u8",
                "rtmp":"rtmp://localhost:1935/test",
                "rtsp":"rtsp://localhost:8554/test",
                "srt":"srt://localhost:8890?streamid=read:test",
                "webrtc":"http://radioserver11.profesionalhosting.com:9069/stream"
            },
        "currentClientsNumber":0,
        "dataUrl":"localhost:3000/v1/rooms/test/data",
        "description":"testing testing testing",
        "maxClientsNumber":10,
        "path":"/test",
        "title":"TEST"
    }]) 

const initState = {
    radioData: radioDataWithIds,
    currentStation: null,
    currentStationId: -1,
    currentStationData: {
        programmeName: '',
        radioText: '',
    },
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
        case "SET_CURRENT_STATION":
            return {
                ...state,
                currentStation: action.currentStation,
                currentStationId: action.currentStation.id,
                currentStationData: {
                    programmeName: '',
                    radioText: '',
                },
            }
        case "SET_CURRENT_STATION_ID":
            // checking if passed station id is correct
            if (action.currentStationId < 0) {
                console.log("Invalid station id:" , action.currentStationId)
                return state
            }
            if (action.currentStationId >= state.radioData.length) {
                console.log("No station with id:", action.currentStationId)
                return state
            }
            return {
                ...state,
                currenStationId: action.currentStationId,
                currentStation: state.radioData.find((station) => {station.id = action.currenStationId}),
                currentStationData: {
                    programmeName: '',
                    radioText: '',
                },
            }
        case "SET_CURRENT_STATION_DATA":
            return {
                ...state,
                currentStationData: action.data,
            }
        case "RESET_CURRENT_STATION":
            return {
                ...state,
                currentStation: null,
                currentStationId: -1,
                currentStationData: {
                    programmeName: '',
                    radioText: '',
                },
            }
    }

    return state;
}

export default radioReducer
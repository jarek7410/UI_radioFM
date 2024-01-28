const initState = {
    streamURL : 'http://localhost:3000',
    protocol : 'hls'
}

const connectionReducer = (state = initState, action : any) => {

    if (!action.type) {
        console.log('Action', action, 'has no type');
        return state;
    }

    switch(action.type) {
        case "SET_STREAM_URL":
            return {
                ...state,
                streamURL : action.streamURL,
            }
        case "SET_PROTOCOL":
            return {
                ...state,
                protocol: action.protocol,
            }
    }

    return state;
}

export default connectionReducer
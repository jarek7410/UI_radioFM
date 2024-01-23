export const SetStreamURLAction = (streamURL : string) => {
    return {
        type: "SET_STREAM_URL",
        streamURL
    }
}

export const SetProtocolAction = (protocol : string) => {
    return {
        type: "SET_PROTOCOL",
        protocol
    }
}


export interface radioDto {
    rooms:room[],
}
export interface room{
    audioUrls:
        {
            hls:String,
            rtmp:String,
            rtsp:String,
            srt:String,
            webrtc:String
        },
    currentClientsNumber:number,
    dataUrl:String,
    description:String,
    maxClientsNumber:number,
    path:String,
    title:String
}
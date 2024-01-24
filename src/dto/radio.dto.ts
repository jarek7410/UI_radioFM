

export interface radioDto {
    rooms:room[],
}
export interface room{
    id:number, // see commit c63c91f5f9b4aa8dfceb1fefd22b0ec64439e20b - Add id to radio stations
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
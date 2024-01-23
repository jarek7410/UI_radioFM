

export interface radioDto {
    rooms:room[],
}
export interface room{
    audioUrls:
        {
            hls:string,
            rtmp:string,
            rtsp:string,
            srt:string,
            webrtc:string
        },
    currentClientsNumber:number,
    dataUrl:string,
    description:string,
    maxClientsNumber:number,
    path:string,
    title:string
}
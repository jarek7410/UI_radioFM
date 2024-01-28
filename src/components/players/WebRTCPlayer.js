import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

const WebRTCPlayer = (props) => {
    const {currentStation, playing} = props;
    const webrtcURL = currentStation.audioUrls.webrtc;
    const iframeRef = useRef(null);
    
    useEffect(()=> {
        if(iframeRef.current) {
        const contentWindow = iframeRef.current.contentWindow;
        if (contentWindow) {
            contentWindow.postMessage('unmute', '*');
        }
    }})

    return (
        playing ? (
        <iframe 
        ref={iframeRef}
        src={webrtcURL}
        style={{
            display: 'none'
        }}
        allow='autoplay'
        ></iframe>
        ) : (null)
    );
};

const mapStateToProps = (state) => {
    return {
        currentStation: state.radio.currentStation,
        playing: state.sound.playing,
    }
}

export default connect(mapStateToProps)(WebRTCPlayer)

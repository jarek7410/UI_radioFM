import React from 'react';
import { connect } from 'react-redux';

const WebRTCPlayer = (props) => {
    const {currentStation, playing} = props;
    const webrtcURL = currentStation.audioUrls.webrtc;
    
    return (
        playing ? (
        <iframe 
        src={webrtcURL}
        style={{
            display: 'none'
        }}
        allow='autoplay; unmute'
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

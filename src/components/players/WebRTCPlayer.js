import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

const WebRTCPlayer = (props) => {
    const {currentStation, playing} = props;
    const webrtcURL = currentStation.audioUrls.webrtc;


    return (
        playing ? (
        <iframe 
        src={webrtcURL}
        style={{
            borderRadius: '25px',
            height: '70px',
            width: '200px',
            margin: '20px',
            background: 'white',
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

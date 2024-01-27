import React, { useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player';

import { connect } from 'react-redux';

const HLSPlayer = (props) => {
  const { currentStation, playing } = props
  const hlsURL = currentStation.audioUrls.hls
  const playerRef = React.useRef();

  useEffect(() => {
    if (playing) {
      playerRef.current.play()
    } else {
      playerRef.current.pause()
    }
  })
  
    return (
      <ReactHlsPlayer
        playerRef={playerRef}
        src={hlsURL}
        autoPlay={playing}
        controls={false}
        width="100%"
        height="auto"
      />
  );
};


const mapStateToProps = (state) => {
    return {
        currentStation: state.radio.currentStation,
        playing: state.sound.playing,
    }
}

export default connect(mapStateToProps)(HLSPlayer)
    
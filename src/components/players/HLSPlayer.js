import React, { useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { View, Text } from 'react-native';

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
      <View
      style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}>
      <Text>{playing ? ("Playing") : ("Paused")}</Text>
      <ReactHlsPlayer
        playerRef={playerRef}
        src={hlsURL}
        autoPlay={true}
        controls={false}
        width="0%"
        height="0%"
      />
      </View>
  );
};


const mapStateToProps = (state) => {
    return {
        currentStation: state.radio.currentStation,
        playing: state.sound.playing,
    }
}

export default connect(mapStateToProps)(HLSPlayer)
    
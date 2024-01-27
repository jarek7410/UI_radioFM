import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReactHlsPlayer from 'react-hls-player';

import { connect } from 'react-redux';

const HLSPlayer = (props) => {
  const { currentStation } = props
  const hlsURL = currentStation.audioUrls.hls
  
    return (
    <View>
      <ReactHlsPlayer
        src="https://pl.streamingvideoprovider.com/mp3-playlist/playlist.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </View>
  );
};


const mapStateToProps = (state) => {
    return {
        currentStation: state.radio.currentStation,
    }
}

export default connect(mapStateToProps)(HLSPlayer)
    
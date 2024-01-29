import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { View, Text } from "react-native";

const RTSPPlayer = (props) => {
    const { currentStation, playing } = props
    const rtspURL = currentStation.audioUrls.rtsp

    return (
        <View
        style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
              }}>
        <Text>{playing ? ("Playing") : ("Paused")}</Text>
        <ReactPlayer 
            url={rtspURL}
            playing={playing}

        />
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        currentStation: state.radio.currentStation,
        playing: state.sound.playing,
    }
}

export default connect(mapStateToProps)(RTSPPlayer)

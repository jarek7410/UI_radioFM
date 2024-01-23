import {ActivityIndicator, IconButton, MD2Colors, MD3Colors,TextInput} from "react-native-paper";
import React from "react";
import { View} from "react-native";
import {checkUrl} from "../helper/connectionHelper";
import {performTimeConsumingTask} from "../helper/devHelper";
import { connect } from "react-redux";
import { SetStreamURLAction } from "../../actions/connectionActions";

const ConnectionScreen = (props) => {
    
    const {streamURL, setStreamURL} = props; //passed by redux mapping
    const {connectToStream} = props; //passed as prop in Main
    // to jest czemu mi sie nie podova redux musisz komentować kod
    //który normalnie byłby self explenatory
    //#DoITBetterDoItWithoutRedux!!!!!!!!
    
    const [connecting , setConnecting] = React.useState(false);
    const [loadingColor, setLoadingColor] = React.useState(MD2Colors.red800);
    const [loadingVisible, setloadingVisible] = React.useState(true);
    const connectAction = async () => {
        console.log("connect action+url: " + streamURL)
        setLoadingColor(MD2Colors.red800);
        setConnecting(true);
        if (!checkUrl(streamURL)) {
            await performTimeConsumingTask(500)
            setLoadingColor(MD2Colors.black);
            setConnecting(false)
            setloadingVisible(false);
            return
        }
        await connectToStream(streamURL);
        console.log("connect action end")

    }
    return (
        <View
            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            <TextInput
                label="stream url"
                value={streamURL}
                onChangeText={setStreamURL}
            />
            <IconButton
                icon="connection"
                iconColor={MD3Colors.error50}
                size={40}
                onPress={connectAction}
                mode={'contained'}
            />
            <ActivityIndicator
                animating={connecting}
                color={loadingColor}
                size={100}
                hidesWhenStopped={loadingVisible}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        streamURL : state.connection.streamURL,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStreamURL : (streamURL : string) => dispatch(SetStreamURLAction(streamURL)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionScreen)
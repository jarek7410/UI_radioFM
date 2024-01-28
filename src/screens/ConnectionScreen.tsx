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
    
    const [connecting , setConnecting] = React.useState(false);
    const [loadingColor, setLoadingColor] = React.useState(MD2Colors.red800);
    const [loadingVisible, setloadingVisible] = React.useState(true);
    const connectAction = async () => {
        setLoadingColor(MD2Colors.red800);
        setConnecting(true);
        if (!checkUrl(streamURL)) {
            console.log('Wrong URL')
            await performTimeConsumingTask(500)
            setLoadingColor(MD2Colors.black);
            setConnecting(false)
            setloadingVisible(false);
        } else {
            connectToStream()
        }

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
                onSubmitEditing={connectAction}
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
import {ActivityIndicator, IconButton, MD2Colors, MD3Colors,TextInput} from "react-native-paper";
import React from "react";
import { View} from "react-native";
import {checkUrl} from "../helper/connectionHelper";
import {performTimeConsumingTask} from "../helper/devHelper";

export const ConnectionScreen = ({connect}) => {
    const [connecting , setConnecting] = React.useState(false);
    const [url, setUrl] = React.useState('');
    const [loadingColor, setLoadingColor] = React.useState(MD2Colors.red800);
    const [loadingVisible, setloadingVisible] = React.useState(true);
    const connectAction = async () => {
        console.log("connect action+url: " + url)
        setLoadingColor(MD2Colors.red800);
        setConnecting(true);
        if (checkUrl(url)) {
            connect();
        } else {
            await performTimeConsumingTask(1500)
            setLoadingColor(MD2Colors.black);
            setConnecting(false)
            setloadingVisible(false);
        }
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
                value={url}
                onChangeText={setUrl}
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
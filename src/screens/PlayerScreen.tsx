import {IconButton, MD3Colors} from "react-native-paper";
import React from "react";
import {View} from "react-native";

export const PlayerScreen = () => {
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
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: 250,
                }}
            >
                <IconButton
                    icon="play"
                    iconColor={MD3Colors.error50}
                    size={40}
                    onPress={() => console.log('Pressed')}
                    mode={'contained'}
                />
                <IconButton
                    icon="stop"
                    iconColor={MD3Colors.error50}
                    size={40}
                    onPress={() => console.log('Pressed')}
                    mode={'contained'}
                />
            </View>
        </View>
    )
}
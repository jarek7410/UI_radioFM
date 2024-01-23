import React from "react";
import {Text, View} from "react-native";

export const SettingScreen = () => {
    return (
        <View
            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: "pink"
            }}
        >
            <Text>SettingScreen</Text>
        </View>
    )
}
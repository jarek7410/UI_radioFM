import React from "react";
import {Text, View} from "react-native";
import SettingPanel from "../components/settings/SettingPanel";

export const SettingScreen = () => {
    return (
        <View
            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: "#1f1f1f"
            }}
        >
            <SettingPanel />
        </View>
    )
}
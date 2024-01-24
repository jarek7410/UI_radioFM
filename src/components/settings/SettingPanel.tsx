import { View } from "react-native"
import ProtocolPicker from "./ProtocolPicker"
import React from "react"
import SoundProfilePicker from "./SoundProfilePicker"

function SettingPanel(props) {
    return (
        <View>
            <ProtocolPicker />
            <SoundProfilePicker />
        </View>
    )
}

export default SettingPanel
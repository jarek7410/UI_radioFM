import {View} from "react-native";
import {Icon, IconButton, MD3Colors} from "react-native-paper";
import React, {useState} from "react";


export const Player = () => {
    const [playing, setPlaying] = useState(false);
    const [connected , setConnected] = useState(false);
    return (
        <View>
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
                    {/*<IconButton*/}
                    {/*    icon="pause"*/}
                    {/*    iconColor={MD3Colors.error50}*/}
                    {/*    size={20}*/}
                    {/*    onPress={() => console.log('Pressed')}*/}
                    {/*    mode={'contained'}*/}
                    {/*/>*/}
                </View>
                <View style={
                    {
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }
                }>

                    <IconButton
                        icon="connection"
                        iconColor={MD3Colors.error50}
                        size={40}
                        onPress={() => setConnected(!connected)}
                        mode={'contained'}
                    />
                    <Icon
                        source={connected?"api":"api-off"}
                        color={MD3Colors.error50}
                        size={20}
                     />
                    <IconButton
                        icon="beach"
                        iconColor={MD3Colors.error50}
                        size={20}
                        onPress={() => console.log('Pressed')}
                        mode={'contained'}
                        />

                    <IconButton
                        icon="cog"
                        iconColor={MD3Colors.error50}
                        size={20}
                        onPress={() => console.log('Pressed')}
                        mode={'contained'}
                    />
                    <IconButton
                        icon="cannabis-off"
                        iconColor={MD3Colors.error50}
                        size={20}
                        onPress={() => console.log('Pressed')}
                        mode={'contained'}
                    />
                    <IconButton
                        icon="candy"
                        iconColor={MD3Colors.error50}
                        size={20}
                        onPress={() => console.log('Pressed')}
                        mode={'contained'}
                    />
                    <IconButton
                        icon="clippy"
                        iconColor={MD3Colors.error50}
                        size={20}
                        onPress={() => console.log('Pressed')}
                        mode={'contained'}
                    />

                </View>
            </View>
        </View>
    )
}
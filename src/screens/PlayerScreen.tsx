import {IconButton, MD3Colors} from "react-native-paper";
import * as React from 'react';
import { List } from 'react-native-paper';
import {Text, View} from "react-native";
import ListSection from "react-native-paper/lib/typescript/components/List/ListSection";
import ListAccordion from "react-native-paper/lib/typescript/components/List/ListAccordion";
import ListIcon from "react-native-paper/lib/typescript/components/List/ListIcon";
import { connect } from "react-redux";
import { SetCurrentStation } from "../../actions/radioActions";
import Player from "./Player";

export const PlayerScreen = (props) =>{
    const { radioData, currentStation, setCurrentStation} = props
    console.log("Current station : ", currentStation)
    const currentStationTitle = currentStation === null ?
        ('No station selected') : (currentStation.title);

    const [station, setStation] = React.useState(
        {title: 'no station',
            audioUrls:{
                hls:"http://localhost:8888/radio_zet/index.m3u8",
                rtmp:"rtmp://localhost:1935/radio_zet",
                rtsp:"rtsp://localhost:8554/radio_zet",
                srt:"srt://localhost:8890?streamid=read:radio_zet",
                webrtc:"http://localhost:8889/radio_zet"
            },
        });
    return (
        <View
            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                // height: '100%',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
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
            {/*<Player url={station.title}/>*/}
            <Text>{currentStationTitle}</Text>
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%',
                    height: 250,
                }}
            >
                <List.Accordion title={'chouse radio'}>
                    {radioData.map((radio) => {
                        return(<>
                            <List.Item title={radio.title} onPress={()=>{setStation(radio)}}/>
                        </>)
                    })}
                </List.Accordion>
            </View>

        </View>
    )
}
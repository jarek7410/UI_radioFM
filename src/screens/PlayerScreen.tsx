import {IconButton, MD3Colors} from "react-native-paper";
import React from 'react';
import { List } from 'react-native-paper';
import {Text, View} from "react-native";
import ListSection from "react-native-paper/lib/typescript/components/List/ListSection";
import ListAccordion from "react-native-paper/lib/typescript/components/List/ListAccordion";
import ListIcon from "react-native-paper/lib/typescript/components/List/ListIcon";
import { connect } from "react-redux";
import { SetCurrentStationAction } from "../../actions/radioActions";
import { setSoundPlayAction, setSoundPauseAction } from "../../actions/soundActions";
import HLSPlayer from "../components/players/HLSPlayer";

function PlayerScreen(props) {
    const { radioData, currentStation, setCurrentStation, currentStationId, protocol} = props
    const { playing, setSoundPause, setSoundPlay } = props
    console.log("Current station : ", currentStation)
    const currentStationTitle = currentStation === null ? 
        ('No station selected') : (currentStation.title);


    const player = currentStationId === -1 ? (null) : (
        protocol === 'hls' ? <HLSPlayer/> : // add more protocols/players when implemented
        null
    )
    
    const playButtonColor = playing ? '#6b6b6b' : '#f7f7f7';
    const stopButtonColor = !(playing) ? '#6b6b6b' : '#f7f7f7';
    const playButtonBackgroundColor = playing ? '#7d2c29' : '#d1291d';
    const stopButtonBackgroundColor = !(playing) ? '#7d2c29' : '#d1291d';

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
                    iconColor={playButtonColor}
                    size={40}
                    onPress={setSoundPlay}
                    mode={'contained'}
                    key={'play'}
                    style={{backgroundColor: playButtonBackgroundColor}}
                />
                <IconButton
                    icon="stop"
                    iconColor={stopButtonColor}
                    size={40}
                    onPress={setSoundPause}
                    mode={'contained'}
                    key={'stop'}
                    style={{backgroundColor: stopButtonBackgroundColor}}
                />
            </View>
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
                    {radioData.map((station) => {
                        const stationStyle = station.id === currentStationId ? ({ // style for chosen station
                            borderWidth: 3,
                            boxsSadowRadius: 2,
                        }) : ({ // style for other stations
                        })
                        return(
                            <List.Item title={station.title} 
                            description={station.description}
                            onPress={()=>{setCurrentStation(station)}}
                            key={station.id}
                            style={stationStyle}/>
                        )
                    })}
                </List.Accordion>
            </View>
            { player }
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        radioData : state.radio.radioData,
        currentStation: state.radio.currentStation,
        currentStationId: state.radio.currentStationId,
        protocol: state.connection.protocol,
        playing: state.sound.playing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentStation : (station) => { dispatch(SetCurrentStationAction(station)) },
        setSoundPlay: () => { dispatch(setSoundPlayAction()) },
        setSoundPause: () => { dispatch(setSoundPauseAction()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen)
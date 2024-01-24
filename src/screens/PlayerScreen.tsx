import {IconButton, MD3Colors} from "react-native-paper";
import * as React from 'react';
import { List } from 'react-native-paper';
import {Text, View} from "react-native";
import ListSection from "react-native-paper/lib/typescript/components/List/ListSection";
import ListAccordion from "react-native-paper/lib/typescript/components/List/ListAccordion";
import ListIcon from "react-native-paper/lib/typescript/components/List/ListIcon";
import { connect } from "react-redux";
import { SetCurrentStationAction } from "../../actions/radioActions";

function PlayerScreen(props) {
    const { radioData, currentStation, setCurrentStation, currentStationId} = props
    console.log("Current station : ", currentStation)
    const currentStationTitle = currentStation === null ? 
        ('No station selected') : (currentStation.title);
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
                    key={'play'}
                />
                <IconButton
                    icon="stop"
                    iconColor={MD3Colors.error50}
                    size={40}
                    onPress={() => console.log('Pressed')}
                    mode={'contained'}
                    key={'stop'}
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
                <List.Accordion title={'chouse radio'} expanded={true}>
                    {radioData.map((station) => {
                        const stationStyle = station.id === currentStationId ? ({ // style for chosen station
                            borderWidth: 3,
                            boxsSadowRadius: 2,
                        }) : ({ // style for other stations
                        })
                        console.log("Station title:", station.title, ", sation id", station.id)
                        return(<>
                            <List.Item title={station.title} 
                            description={station.description}
                            onPress={()=>{setCurrentStation(station)}}
                            key={station.id}
                            style={stationStyle}/>
                        </>)
                    })}
                </List.Accordion>
            </View>

        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        radioData : state.radio.radioData,
        currentStation: state.radio.currentStation,
        currentStationId: state.radio.currentStationId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentStation : (station) => { dispatch(SetCurrentStationAction(station)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen)
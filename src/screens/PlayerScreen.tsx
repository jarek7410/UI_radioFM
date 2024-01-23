import {IconButton, MD3Colors} from "react-native-paper";
import * as React from 'react';
import { List } from 'react-native-paper';
import {Text, View} from "react-native";
import ListSection from "react-native-paper/lib/typescript/components/List/ListSection";
import ListAccordion from "react-native-paper/lib/typescript/components/List/ListAccordion";
import ListIcon from "react-native-paper/lib/typescript/components/List/ListIcon";
import { connect } from "react-redux";
import { SetCurrentStation } from "../../actions/radioActions";

function PlayerScreen(props) {
    const { radioData, currentStation, setCurrentStation} = props
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
                />
                <IconButton
                    icon="stop"
                    iconColor={MD3Colors.error50}
                    size={40}
                    onPress={() => console.log('Pressed')}
                    mode={'contained'}
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
                        return(<>
                            <List.Item title={station.title} onPress={()=>{setCurrentStation(station)}}/>
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
        currentStation: state.radio.currentStation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentStation : (station) => { dispatch(SetCurrentStation(station)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen)
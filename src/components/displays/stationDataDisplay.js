import { connect } from "react-redux"
import { SetCurrentStationDataAction } from "../../../actions/radioActions"
import axios from "axios";
import { View, Text } from "react-native";
import { useEffect } from "react";
import { MD3Colors } from "react-native-paper";

const StationDataDisplay = (props) => {
    const {currentStation, currentStationData, setCurrentStationData} = props;

    if ( currentStation === null) {
        return null
    }

    const fetchRadioData = () => {
        const stationDataURL = currentStation.dataUrl
        axios.get(stationDataURL).then(
            res => {
                const stationData = res.data
                setCurrentStationData(stationData)
            }
        ).catch(error => console.error('Error geting radio data', error))
    }

    useEffect(() => {
        const fetch = fetchRadioData
        const intervalId = setInterval(fetch, 5000);
        return () => clearInterval(intervalId);
      }, [currentStation]);



    const {programmeName, radioText} = currentStationData
    console.log(programmeName, radioText)
    if ( programmeName === "" && radioText === "" ) { // fetching station data from API if not present
        fetchRadioData()
    }

    return (
        <View
        style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    // height: 100,
                }}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: MD3Colors.error50
                    }}>
                {programmeName}
            </Text>
            <Text
            style={{
                    fontSize: 14,
                    color: '#b5b3ae'
                    }}>
                    {radioText}</Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        currentStation: state.radio.currentStation,
        currentStationData: state.radio.currentStationData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentStationData: (data) => dispatch(SetCurrentStationDataAction(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationDataDisplay)
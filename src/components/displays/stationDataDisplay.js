import { connect } from "react-redux"
import { SetCurrentStationDataAction } from "../../../actions/radioActions"
import axios from "axios";
import { View, Text } from "react-native";
import { useEffect } from "react";

const StationDataDisplay = (props) => {
    const {currentStation, currentStationData, setCurrentStationData} = props;

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
      }, []);

    if ( currentStation === null) {
        return null
    }

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
                    fontWeight: 'bold'
                    }}>
                {programmeName}
            </Text>
            <Text>{radioText}</Text>
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
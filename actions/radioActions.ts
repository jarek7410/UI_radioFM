export const SetRadioDataAction = (radioData : []) => {
    return {
        type: "SET_RADIO_DATA",
        radioData
    }
}

export const SetCurrentStationAction = (currentStation) => {
    return{
        type: "SET_CURRENT_STATION",
        currentStation
    }
}  


export const SetCurrentStationIdAction = (currentStationId : number) => {
    return{
        type: "SET_CURRENT_STATION_ID",
        currentStationId
    }
}  

export const ResetCurrentStationAction = () => {
    return {
        type: "RESET_CURRENT_STATION"
    }
}
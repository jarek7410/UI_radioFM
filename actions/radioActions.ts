export const SetRadioDataAction = (radioData : []) => {
    return {
        type: "SET_RADIO_DATA",
        radioData
    }
}

export const SetCurrentStation = (currentStation) => {
    return{
        type: "SET_CURRENT_STATION",
        currentStation
    }
}  
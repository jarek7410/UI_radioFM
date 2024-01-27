const initState = {
    soundProfile: 'stereo',
    playing: true,
}

const soundReducer = (state = initState, action) => {
    if (!action.type) {
        console.log('Action', action, 'has no type');
        return state;
    }

    switch(action.type) {
        case "SET_SOUND_PROFILE":
            return {
                ...state,
                soundProfile: action.soundProfile,
            }
        case "SET_PLAY":
            return {
                ...state,
                playing: true,
            }
        case "SET_PAUSE":
            return {
                ...state,
                playing: false,
            }
    
    }

    return state;
}

export default soundReducer
const initState = {
    soundProfile: 'stereo'
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
    }

    return state;
}

export default soundReducer
export const setSoundProfileAction = (soundProfile : string) => {
    return {
        type: "SET_SOUND_PROFILE",
        soundProfile
    }
}

export const setSoundPlayAction = () => {
    return {
        type: "SET_PLAY"
    }
}

export const setSoundPauseAction = () => {
    return {
        type: "SET_PAUSE"
    }
}
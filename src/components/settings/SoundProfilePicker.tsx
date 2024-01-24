import React from "react";
import { List } from "react-native-paper"
import { connect } from "react-redux";
import { setSoundProfileAction } from "../../../actions/soundActions";

function SoundProfilePicker(props) {
    const {soundProfile, setSoundProfile} = props;
    const avaibleSoundProfiles = [
        "mono", "stereo" 
    ]

    return (
        <List.Accordion title={`Sound Profile: ${soundProfile}`}>
            {
                avaibleSoundProfiles.map(profile => {
                    return profile === soundProfile ?
                    (<List.Item title={profile} onPress={setSoundProfile(profile)} key={profile}
                    style = {{
                        borderWidth: 3,
                        shadowRadius: 2,
                    }}/>):
                    (<List.Item title={profile} onPress={() => {setSoundProfile(profile)} } key={profile}/>)
                })
            }
        </List.Accordion>  
    )
}

const mapStateToProps = (state) => {
    return {
        soundProfile : state.sound.soundProfile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSoundProfile : (soundProfile : string) => dispatch(setSoundProfileAction(soundProfile)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundProfilePicker)
import * as React from 'react';
import {IconButton, MD3Colors, MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import Demo from "./screens/Demo";
import {Player} from "./screens/Player";
import ConnectionScreen from "./screens/ConnectionScreen";
import {screenEnum} from "./enum/screen";
import PlayerScreen from "./screens/PlayerScreen";
import {SettingScreen} from "./screens/SettingScreen";
import {View} from "react-native";
import { connect } from 'react-redux';
import {room} from "./dto/radio.dto";
import { SetRadioDataAction } from '../actions/radioActions';
import axios from 'axios';
import { addIdsToObjArray } from './helper/utilHelper';

function Main(props) {
    const {radioData, setRadioData, streamURL} = props 

    const [screen, setScreen] = React.useState(screenEnum.connect)
    const [BeforeSetting, setBeforeSetting] = React.useState(screenEnum.connect)
    // const performTimeConsumingTask = async() => {
    //     return new Promise((resolve) =>
    //         setTimeout(
    //             () => { resolve('result') },
    //             3000
    //         )
    //     );
    // }
    const connectToStream = () => {
        console.log(`${streamURL}/v1/rooms`)
        axios.get(`${streamURL}/v1/rooms`).
        then(res => {
            const radiosWithId = addIdsToObjArray(res.data.rooms)
            setRadioData(radiosWithId)
        }).then(
            res => setScreen("player")
        ).catch(error => console.error('Error geting rooms', error))
    }

    const goSettingsAction = () => {
        console.log("settings");
        if(screen === screenEnum.settings) {
            setScreen(BeforeSetting)
            return
        }
        setScreen("settings")
        setBeforeSetting(screen)
    }


  return (
    <View
        style={{
            height: '100%'
        }}>
        <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: MD3Colors.error50,
                    padding: 10,
                    width: '100%',
                    // height: 100,
                }}
          >
              <IconButton
                  icon="cog"
                  iconColor={MD3Colors.error50}
                  size={20}
                  onPress={goSettingsAction}
                  mode={'contained'}
              />

          </View>
          {screen === screenEnum.connect &&
              <ConnectionScreen
                  connectToStream={connectToStream}
              />
          }
          {screen === screenEnum.player &&
              <PlayerScreen />
          }
          {screen === screenEnum.settings &&
              <SettingScreen />
          }
    </View>
  )
}

const mapStateToProps = (state) => {
    return {
        radioData : state.radio.radioData,
        streamURL : state.connection.streamURL
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRadioData : (radioData) => dispatch(SetRadioDataAction(radioData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

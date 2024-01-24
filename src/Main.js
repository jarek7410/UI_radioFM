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

function Main(props) {
    const {radioData, setRadioData} = props 

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
    const connectToStream = async (url) => {
        console.log("connect");
        try{
            const response = await fetch(url+"/v1/rooms")
            const radioData = await response.json()
            setRadioData(radioData)
            console.log("connected")
        }catch (e){
            console.log("error")
        }
        // const radioData = require("/src/dto/radio.json")
        setScreen("player")//todo: make it not after error
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRadioData : (radioData) => dispatch(SetRadioDataAction(radioData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

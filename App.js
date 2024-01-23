import * as React from 'react';
import {IconButton, MD3Colors, MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import Demo from "./src/screens/Demo";
import {Player} from "./src/screens/Player";
import {ConnectionScreen} from "./src/screens/ConnectionScreen";
import {screenEnum} from "./src/enum/screen";
import {PlayerScreen} from "./src/screens/PlayerScreen";
import {SettingScreen} from "./src/screens/SettingScreen";
import {View} from "react-native";
import {room} from "./src/dto/radio.dto";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function Main() {
    const [screen, setScreen] = React.useState(screenEnum.connect)
    const [BeforeSetting, setBeforeSetting] = React.useState(screenEnum.connect)
    const [radioData, setRadioData] = React.useState([{
        "audioUrls":
            {
                "hls":"http://localhost:8888/radio_zet/index.m3u8",
                "rtmp":"rtmp://localhost:1935/radio_zet",
                "rtsp":"rtsp://localhost:8554/radio_zet",
                "srt":"srt://localhost:8890?streamid=read:radio_zet",
                "webrtc":"http://localhost:8889/radio_zet"
            },
        "currentClientsNumber":0,
        "dataUrl":"localhost:3000/v1/rooms/radio_zet/data",
        "description":"Stacja radiowa FM",
        "maxClientsNumber":10,
        "path":"/radio_zet",
        "title":"Radio ZET"
    },
        {
            "audioUrls":
                {
                    "hls":"http://localhost:8888/rmf_fm/index.m3u8",
                    "rtmp":"rtmp://localhost:1935/rmf_fm",
                    "rtsp":"rtsp://localhost:8554/rmf_fm",
                    "srt":"srt://localhost:8890?streamid=read:rmf_fm",
                    "webrtc":"http://localhost:8889/rmf_fm"
                },
            "currentClientsNumber":0,
            "dataUrl":"localhost:3000/v1/rooms/rmf_fm/data",
            "description":"Stacja radiowa FM",
            "maxClientsNumber":10,
            "path":"/rmf_fm",
            "title":"RMF FM"
        }])
    // const performTimeConsumingTask = async() => {
    //     return new Promise((resolve) =>
    //         setTimeout(
    //             () => { resolve('result') },
    //             3000
    //         )
    //     );
    // }
    const connect = async (url) => {
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
      <PaperProvider theme={theme}>
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
                  connect={connect}
              />
          }
          {screen === screenEnum.player &&
              <PlayerScreen
                radioData={radioData}
              />
          }
          {screen === screenEnum.settings &&
              <SettingScreen />
          }
      </PaperProvider>
  );
}
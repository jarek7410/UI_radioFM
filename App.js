import * as React from 'react';
import {IconButton, MD3Colors, MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import Demo from "./src/screens/Demo";
import {Player} from "./src/screens/Player";
import {ConnectionScreen} from "./src/screens/ConnectionScreen";
import {screenEnum} from "./src/enum/screen";
import {PlayerScreen} from "./src/screens/PlayerScreen";
import {SettingScreen} from "./src/screens/SettingScreen";
import {View} from "react-native";

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
    const performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                3000
            )
        );
    }
    const connect = async () => {
        console.log("connect");
        await performTimeConsumingTask()
        console.log("connected")
        setScreen("player")
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
              <PlayerScreen />
          }
          {screen === screenEnum.settings &&
              <SettingScreen />
          }
      </PaperProvider>
  );
}
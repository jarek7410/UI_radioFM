import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import * as MediaLibrary from 'expo-media-library';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Demo() {
    const [musicFiles, setMusicFiles] = useState([])
    const [playing, setPlaying] = useState(-1)
    const [sound, setSound] = useState(null);
    const [progressDuration, setProgressDuration] = useState(0)
    // for mobile
    // const fetchMusicFiles = async () => {
    //     const permission = await MediaLibrary.requestPermissionsAsync(
    //
    //     );
    //     const media = await MediaLibrary.getAssetsAsync({
    //         mediaType: MediaLibrary.MediaType.audio,
    //     });
    //     setMusicFiles(media.assets)
    // }

    const fetchMusicFiles = async () => {

            setMusicFiles([
                {file:{uri:"fuu/foo.mp3"}},
                {file:{file:"/assets/media/1-1.mp3"}},
                {file:{file:"/assets/media/01 All Is Found.m4a"}}
            ])

    }
    const getsound = async (file) => {
        console.log("playing")

        if (file.uri) {
            console.log("uri")
            const {sound} = await Audio.Sound.createAsync({
                uri: fileUri.uri,
            });
            return sound;
        } else if (file.file) {
            console.log("file")
            const {sound} = await Audio.Sound.createAsync(
                require(file.file.toString())
            );
            return sound;
        }
        else
            console.log("no file")
        // const { sound } = data
    }
    const playMusic = async (file) => {
        console.log("playing")


        // const { sound } = data
        const sound = await getsound(file)
        console.log("playing")
        console.log(sound)
        setSound(sound);
        await sound.playAsync();
    }

    const pauseMusic = async () => {
        await sound.pauseAsync();
    }
    useEffect(() => {
        if (!sound) {
            return;
        }
        sound.setOnPlaybackStatusUpdate(
            async (status) => {
                if (status.didJustFinish) {
                    setPlaying(-1)
                    await sound.unloadAsync();
                    console.log("finished")
                    setSound(null);
                }
                else {
                    setProgressDuration(status.positionMillis / 1000)
                }
            }
        );
    }, [sound])
    useEffect(() => {
            fetchMusicFiles()
        }
        , [])
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.heading}>
                Welcome to GeeksforGeeks
            </Text>
            <View style={styles.list}>

                {musicFiles.map((file, index) => {

                    return (
                        <View key={index}>

                            <TouchableOpacity onPress={
                                playing !== index ?
                                    () => {
                                        playMusic(file)
                                        setPlaying(index)
                                    } :
                                    () => {
                                        pauseMusic()
                                        setPlaying(-1)
                                    }
                            } style={styles.playButton}>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                    <Ionicons
                                        name={playing !== index ?
                                            "play" :
                                            "pause"}
                                        size={30}
                                        color="white" >
                                        <Text
                                            style={styles.fileName}>
                                            {file.filename}
                                        </Text>


                                    </Ionicons>
                                </View>
                                {/* progress duration if index == currentIndex*/}
                                <View style={styles.row}>

                                    {playing === index ?
                                        <Text style={styles.fileName}>
                                            {progressDuration} / {file.duration}
                                        </Text> :
                                        <></>
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    container: {
        backgroundColor: "#fff",
        height: "100%",
        marginTop: 50,
    },
    heading: {
        color: "green",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    list: {
        marginTop: 20,
        flex: 1,
        flexDirection: "column",
    },
    fileName: {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold',
    },
    playButton: {
        backgroundColor: 'gray',
        borderRadius: 50,
        padding: 10,
        margin: 10,
    },
});
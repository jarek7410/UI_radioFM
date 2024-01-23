import RadioPlayer, {
    RadioPlayerEvents,
    RadioPlayerMetadata,
} from 'react-native-radio-player';

// jako tako to bedzie działać

const metadataSeparator = "-"; // Used to split artist and title in stream metadata
RadioPlayer.radioURLWithMetadataSeparator('https://...', metadataSeparator);
// or RadioPlayer.radioURL('https://...')
RadioPlayer.stop();
RadioPlayer.play();

// State: error, stopped, playing, paused, buffering
RadioPlayerEvents.addListener('stateDidChange', (event) => {
    console.log(event.state);
});
// Metadata: {"artistName": "Example Artist", "trackName": "Example Title"}
RadioPlayerEvents.addListener('MetadataDidChange', (metadata) => {
    console.log(`Artist: ${metadata.artistName}`);
    console.log(`Title: ${metadata.trackName}`);
});
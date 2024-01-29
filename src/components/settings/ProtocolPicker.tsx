import React from "react";
import { SetProtocolAction } from "../../../actions/connectionActions"
import { List } from "react-native-paper"
import { connect } from "react-redux";

function ProtocolPicker(props) {
    const {protocol, setProtocol} = props;
    const avaibleProtocols = [
        "hls", "webrtc", "rtsp" 
    ]

    return (
        <List.Accordion title={`Connection Protocol: ${protocol}`}>
            {
                avaibleProtocols.map(prot => {
                    return prot === protocol ?
                    (<List.Item title={prot} onPress={setProtocol(prot)} key={prot}
                    style = {{
                        borderWidth: 3,
                        shadowRadius: 2,
                    }}/>):
                    (<List.Item title={prot} onPress={() => {setProtocol(prot)}} key={prot}/>)
                })
            }
        </List.Accordion>  
    )
}

const mapStateToProps = (state) => {
    return {
        protocol : state.connection.protocol,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProtocol : (protocol : string) => dispatch(SetProtocolAction(protocol)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtocolPicker)
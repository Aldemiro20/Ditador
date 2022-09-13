import React from "react";
import { WebView } from "react-native-webview";
import {View} from 'react-native'

const App=()=>{

  
  return (
    <View style={{ flex: 1 }}>
       <WebView originWhitelist={["*"]} source={{ uri: "https://app.audioconverttext.com/" }} />
    </View>
    );
}
export default App;



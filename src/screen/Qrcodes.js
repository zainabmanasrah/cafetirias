import React, { useState, useEffect } from 'react';

import {QrcodeStyle} from '../styles/QrcodeStyle'
import { Text, View, StyleSheet, Button,ScrollView,TouchableOpacity,Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
const Qrcodes = ({navigation}) => {

const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
  
return (
  <ScrollView>

<View style={QrcodeStyle.root}>


      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}






</View>

  </ScrollView>
)

 }

 export default Qrcodes
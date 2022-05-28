import React, { useState, useEffect } from 'react';

import {QrcodeStyle} from '../styles/QrcodeStyle'
import { Text, View, StyleSheet, Button,ScrollView,TouchableOpacity,Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
const Qrcodesseller = ({navigation,route}) => {
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
const x=JSON.parse(data)
const userType=route.params.userType;
if (x.userType===userType)
      {
        if (userType==='student')
        {
navigation.navigate('Transmision',{
  data
})

        }
        else if(userType==='seller'){
          alert('seller');
        }
      }
      else{
        alert( `in valid ${data}`);

      }
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

 export default Qrcodesseller
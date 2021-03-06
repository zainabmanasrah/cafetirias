
import {QrcodeStyle} from '../styles/QrcodeStyle'
import React from 'react'
import {View,Text,Image,TouchableOpacity,TextInput,ImageBackground,ScrollView} from 'react-native'
import QRCode from 'react-native-qrcode-svg';

const Qrcodecustomer = ({navigation}) => {
  const n = () =>
  {
      navigation.navigate('Qrcodescustomer',{userType:'seller'})   
  }
  const callFun = () =>
{
    navigation.navigate('Qrcodecustomer')
}
const callFun2 = () =>
{
    navigation.navigate('Customerhome')


}
const callFun3 = () =>
{
    navigation.navigate('SettingCustomer')


}
return (
  <ScrollView>

<View style={QrcodeStyle.root}>
<Image
  style={QrcodeStyle.image}
  source={require('../assets/qrc.png')}
/>
<Text style={QrcodeStyle.text}>
الكود الخاص بك </Text>

<View  style={QrcodeStyle.qrcodebackgroung}>
<QRCode
      value="http://awesome.link.qr"
      
    />

</View>



<TouchableOpacity onPress={n} style={QrcodeStyle.but}>
<Text style={QrcodeStyle.buttext}>
مسح QR Code</Text>
</TouchableOpacity>

<View >
    <TouchableOpacity style={{marginTop:40,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
        <Image source={require('../assets/qr.png')}
        style={{width:50,height:50,marginRight:250,marginTop:0}}
/>

    </TouchableOpacity>
    <TouchableOpacity style={{justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70}} activeOpacity = { .5 } onPress={callFun2}>
        <Image source={require('../assets/home.png')}
        style={{width:40,height:40,marginLeft:20,marginTop:-65}}
/>

    </TouchableOpacity>
    <TouchableOpacity style={{justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70}} activeOpacity = { .5 } onPress={callFun3}>
        <Image source={require('../assets/setti.png')}
        style={{width:40,height:40,marginLeft:250,marginTop:-135}}
/>

    </TouchableOpacity>
</View>
</View>

  </ScrollView>
)

 }

 export default Qrcodecustomer;

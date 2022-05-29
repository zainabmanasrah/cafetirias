
import {AdsAndOfferStyle} from '../styles/AdsAndOfferStyle'
import React from 'react'
import {View,Text,Image,TextInput, ScrollView,TouchableOpacity} from 'react-native'

const AdsAndOfferSeller = ({navigation}) => {
  const callFun = () =>
  {
      navigation.navigate('Qrcodeseller')
  
  
  }
  const callFun2 = () =>
  {
      navigation.navigate('Sellerhomes')
  
  
  }
  const callFun3 = () =>
  {
      navigation.navigate('SettingSeller')
  
  
  }
return (
<ScrollView >

<View style={AdsAndOfferStyle.root}>
<Image
  style={AdsAndOfferStyle.image}
  source={require('../assets/ads.png')}
/>



<Text style={AdsAndOfferStyle.text}>
وصف العرض

</Text>


<Text style={AdsAndOfferStyle.text}>

وصف العرض
</Text>

<Text style={AdsAndOfferStyle.text}>
وصف العرض
</Text>



</View>

<View >
    <TouchableOpacity style={{justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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
</ScrollView>


)

 }

 export default AdsAndOfferSeller;

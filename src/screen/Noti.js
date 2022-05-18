
import {NotiStyle} from '../styles/NotiStyle'
import React from 'react'
import {View,Text,Image,TextInput, ScrollView,TouchableOpacity} from 'react-native'

const Noti = ({navigation}) => {
  const callFun = () =>
  {
      navigation.navigate('Noti')
  
  
  }
  const callFun2 = () =>
  {
      navigation.navigate('Sellerhome')
  
  
  }
  const callFun3 = () =>
  {
      navigation.navigate('Setting')
  
  
  }
return (
<ScrollView >

<View style={NotiStyle.root}>
<Image
  style={NotiStyle.image}
  source={require('../assets/noti.png')}
/>

<TextInput style={NotiStyle.inputfield}
placeholder="فلتر النتائج تبعاً ل…"
/>

<TextInput style={NotiStyle.inputfield1}
placeholder="ابحث عن طريق …"
/>

<Text style={NotiStyle.text}>
اشعارات تخص العمليات و العروض و غيرها


</Text>


<Text style={NotiStyle.text}>

اشعارات تخص العمليات و العروض و غيرها

</Text>

<Text style={NotiStyle.text}>
اشعارات تخص العمليات و العروض و غيرها


</Text>

<Text style={NotiStyle.text}>
اشعارات تخص العمليات و العروض و غيرها


</Text>

<Text style={NotiStyle.text}>
اشعارات تخص العمليات و العروض و غيرها


</Text>

<View >
    <TouchableOpacity style={{marginTop:30,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#ffffff'}} activeOpacity = { .5 } onPress={callFun}>
        <Image source={require('../assets/not.png')}
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

 export default Noti;

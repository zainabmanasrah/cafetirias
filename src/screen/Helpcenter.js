
import {Helpcenterstyle} from '../styles/Helpcenterstyle'
import React from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native'

const Helpcenter = ({navigation}) => {
  const callFun = () =>
  {
      navigation.navigate('Noti')
  
  
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

<View style={Helpcenterstyle.root}>

<Image
  style={Helpcenterstyle.image}
  source={require('../assets/D3.png')}
/>
<Text style={Helpcenterstyle.text}>
تواصل معنا عبر الايميل</Text>
<Text style={{marginBottom:-140,
    color:'rgb(154, 71, 38)',
   fontWeight: '400',
   fontSize: 25,marginLeft:150,
   }}>
     admin@gmail.com
</Text>

   

<View >
    <TouchableOpacity style={{marginTop:350,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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

 export default Helpcenter;

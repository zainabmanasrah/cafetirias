
import {Helpcenterstyle} from '../styles/Helpcenterstyle'
import React from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Helpcenter = ({navigation}) => {
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
  <ScrollView>

<View style={Helpcenterstyle.root}>

<Image
  style={Helpcenterstyle.image}
  source={require('../assets/D3.png')}
/>
<Text style={Helpcenterstyle.text}>
كيف يمكننا مساعدتك؟
</Text>
<Text style={{marginTop:-180,
    color:'rgb(154, 71, 38)',
   fontWeight: '400',
   fontSize: 25,marginLeft:240,
   }}>
الايميل</Text>
<TextInput placeholder='###############' style={{ borderColor:"rgb(154, 71, 38)",
      color:"#707070",
      borderWidth:1,
      marginLeft:90,
      width:250,
      height:50,
      marginBottom:20,
      textAlign:'right',
      marginTop:30,}}></TextInput>
      <Text style={{
    color:'rgb(154, 71, 38)',
   fontWeight: '400',
   fontSize: 25,marginLeft:240,
   }}>
الرسالة</Text>
<TextInput placeholder='###############' style={{ borderColor:"rgb(154, 71, 38)",
      color:"#707070",
      borderWidth:1,
      marginLeft:90,
      width:250,
      height:120,
      marginBottom:20,
      textAlign:'right',
      marginTop:30,}}></TextInput>
<TouchableOpacity style={Helpcenterstyle.but}>
</TouchableOpacity>
<Text style={Helpcenterstyle.buttext}>
 ارسال</Text>

<View >
    <TouchableOpacity style={{marginTop:30,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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

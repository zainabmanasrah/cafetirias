
import {Helpcenterstyle} from '../styles/Helpcenterstyle'
import React from 'react'
import {View,Text,Image,TouchableOpacity,TextInput,ImageBackground,ScrollView} from 'react-native'

const Help = ({navigation}) => {
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
  const callFun4 = () =>
  {
      navigation.navigate('Helpcenter')
  }
return (
  <ScrollView>

<View style={Helpcenterstyle.root}>

<Image
  style={Helpcenterstyle.image}
  source={require('../assets/D3.png')}
/>
<Text style={Helpcenterstyle.text}>
اكتب مشكلتك</Text>
<TextInput style={{ maxWidth:368,
  height: 155,
  width:290,
  marginTop:-185,
  borderWidth:1,
  borderRadius: 10,
  color:'rgb(154, 71, 38)',
  borderColor: 'rgb(154, 71, 38)',
  backgroundColor:'#FAF4EE',
	borderWidth:1,
  marginRight:20,
  textAlign:'right',}}
  placeholder="مرحبا,لدي مسكلة في التطبيق هل يمكنك مساعدتي"></TextInput>




<TouchableOpacity onPress={callFun4} style={Helpcenterstyle.but}>
</TouchableOpacity>
<Text style={Helpcenterstyle.buttext}>
 إرسال</Text>

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

 export default Help;

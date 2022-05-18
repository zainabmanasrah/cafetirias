
import {Helpcenterstyle} from '../styles/Helpcenterstyle'
import React from 'react'
import {View,Text,Image,TouchableOpacity,TextInput,ScrollView} from 'react-native'

const Helpcenter = ({navigation}) => {
  const callFun = () =>
  {
      navigation.navigate('Qrcode')
  
  
  }
  const callFun2 = () =>
  {
      navigation.navigate('Customerhome')
  
  
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
<Text style={{fontSize:18,color:'#9A4726',marginTop:-190,marginLeft:220}}>
اسم المستخدم</Text>
<TextInput style={{maxWidth:368,
  height: 45,
  width:220,
  marginTop:20,
  borderWidth:1,
  borderRadius: 10,
  color:'rgb(154, 71, 38)',
  borderColor: 'rgb(154, 71, 38)',
  backgroundColor:'#FFFFFF',
	borderWidth:1,
  marginLeft:110,
  textAlign:'right',}}
      />
<Text style={{fontSize:18,color:'#9A4726',marginTop:20,marginRight:80}}>
 مسؤول الكافتيريا</Text>
<TextInput placeholder='مرحبا,لدي مشكلة في التطبيق' style={{maxWidth:368,
  height: 45,
  width:220,
  marginTop:20,
  borderWidth:1,
  borderRadius: 10,
  color:'#9A4726',
  borderColor: 'rgb(154, 71, 38)',
  backgroundColor:'#FFFFFF',
	borderWidth:1,
  marginRight:140,
  textAlign:'right',}}
      />
      <Text style={{fontSize:18,color:'#9A4726',marginTop:30,marginLeft:220}}>
اسم المستخدم</Text>
<TextInput placeholder='أهلا,كيف يمكنني مساعدتك'  style={{maxWidth:368,
  height: 45,
  width:220,
  marginTop:20,
  borderWidth:1,
  borderRadius: 10,
  color:'#9A4726',
  borderColor: 'rgb(154, 71, 38)',
  backgroundColor:'#FFFFFF',
	borderWidth:1,
  marginLeft:110,
  textAlign:'right',}}
      />
      <Text style={{fontSize:18,color:'#9A4726',marginTop:20,marginRight:80}}>
 مسؤول الكافتيريا</Text>
<TextInput style={{maxWidth:368,
  height: 45,
  width:220,
  marginTop:20,
  borderWidth:1,
  borderRadius: 10,
  color:'rgb(154, 71, 38)',
  borderColor: 'rgb(154, 71, 38)',
  backgroundColor:'#FFFFFF',
	borderWidth:1,
  marginRight:140,
  textAlign:'right',}}
      />

<View >
    <TouchableOpacity style={{marginTop:10,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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

 export default Helpcenter;


import {Helpcenterstyle} from '../styles/Helpcenterstyle'
import React from 'react'
import {View,Text,Image,TouchableOpacity,TextInput,ScrollView} from 'react-native'

const Transfers = ({navigation}) => {
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
  const call = () =>
  {
      navigation.navigate('Transmision')
  
  
  }
  const call2 = () =>
  {
      navigation.navigate('Withdraw ')
  
  
  }
return (
  <ScrollView>

<View style={Helpcenterstyle.root}>
<Text style={{color:'#9A4726',marginTop:60,fontSize:30,fontWeight:'500'}} >صفحةالتحويلات</Text>
<Text style={{color:'#9A4726',width:140,padding:10,height:40,backgroundColor:'#FAF4EE',marginTop:60}}>
    رصيدك الحالي :00
</Text>
<Text style={{color:'#9A4726',borderWidth:1,
 borderColor: 'rgb(154, 71, 38)'

,width:240,textAlign:'center',padding:10,height:40,backgroundColor:'#FAF4EE',marginTop:60}}>
     حدد نوع العملية</Text>


<TouchableOpacity onPress={call} style={{ maxWidth:368,
  height: 35,
  marginTop:90,
  borderWidth:1,
  borderRadius: 10,
  width:220
  ,

  color:'rgb(154, 71, 38)',
  borderColor: 'rgb(154, 71, 38)',
  backgroundColor:'#FFFFFF',
	borderWidth:1,
  marginRight:20,
  textAlign:'right',}}>

</TouchableOpacity>
<Text style={{marginTop:-30,
 color: '#9A4726',
 fontSize: 18,
marginRight:25,}}>تحويل وايداع</Text>
<TouchableOpacity onPress={call2} style={{ maxWidth:368,
  height: 35,
  marginTop:40,
  borderWidth:1,
  borderRadius: 10,
  width:220,
  color:'rgb(154, 71, 38)',
  borderColor: 'rgb(154, 71, 38)',
  backgroundColor:'#FFFFFF',
	borderWidth:1,
  marginRight:20,
  textAlign:'right',}}>

</TouchableOpacity>
<Text style={{marginTop:-30,
 color: '#9A4726',
 fontSize: 18,
marginRight:25,}}>سحب</Text>


<View >
    <TouchableOpacity style={{marginTop:200,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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

 export default Transfers;

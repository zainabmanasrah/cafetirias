import {SecondStyle} from '../styles/SecondStyle'
import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
const Second = ({navigation}) => {

  const handleclick = () => {
    navigation.navigate('LoginScreencustomer')

}
const handleclick2 = () => {
  navigation.navigate('CustomerReg')

}
return (
<View style={SecondStyle.root}>

<Image
  style={SecondStyle.d2}
  source={require('../assets/d1.png')}
/>

<Image
  style={SecondStyle.image}
  source={require('../assets/cafe.png')}
/>


<TouchableOpacity onPress={handleclick} style={SecondStyle.but}>
<Text style={SecondStyle.text}>
تسجيل الدخول كزبون 
</Text>
</TouchableOpacity>

<Text  style={SecondStyle.Container}>
لا تمتلك حساب ؟ 
<Text onPress={handleclick2} style={{fontWeight: '700',textDecorationLine: 'underline'}}>
  إنشاء حساب كزبون 
</Text>

</Text>

<TouchableOpacity
style={SecondStyle.but2}>
<Text style={SecondStyle.text}>
  تسجيل الدخول كبائع 
</Text>
</TouchableOpacity>




</View>


)

 }

 export default Second;

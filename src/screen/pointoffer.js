import React, {useState} from 'react';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

  
const PointOffer= ({navigation}) => {


  const [Open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [numbers, setNumbers] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'}
  ]);
  const callFun2 = () =>
  {
      navigation.navigate('Customerhome')
  }

  return (
       <View style={styles.container}>
      <Text style={styles.balance} > رصيدك الحالي من النقاط:</Text>

      <Text style={styles.text} > حدد عرض النقاط الذي تود استغلاله من القائمة</Text>

     
      <View style={{top:92}}>
      <View style={{top:-185,height:32,width:330}} >
      <DropDownPicker style={styles.droplist}
          open={Open1}
          value={value1}
          items={numbers}
          setOpen={setOpen1}
          setValue={setValue1}
          setItems={setNumbers}
        />
      </View>

      </View>
      <TouchableOpacity onPress={callFun2} style={styles.button}>
        <Text style={styles.buttontext} >تأكيد</Text>
       </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

  },
  droplist:{
    height:32,
    width:330,
    marginLeft:0.8,
    position:'relative',
    borderColor:'#9A4726'
  },
button:{
  left:-12,
  backgroundColor:"#9A4726", 
  paddingVertical:-52,
  paddingRight:11,
  top:148,
  height:42,
  width:330,
  marginLeft:25,
  borderRadius:5,

},

buttontext:{
  textAlign:'center',
  color:"white",
  borderColor:"#FDE9D9",
  fontSize:20,
  top:8
},
balance:{
  backgroundColor:"#FAF4EE",
  borderRadius:10,
  bottom:185,
  height:44,
  width:326,
  padding:10,
  fontSize:14,
  textAlign:'center',
  fontWeight: '500',
  color:"#9A4726",
},
  
text:{

  borderRadius:10,
  bottom:105,
  height:44,
  width:326,
  fontSize:15,
  fontWeight:'500',
  padding:10,
  textAlign:'center',
  color:"#9A4726",
},

});
export default PointOffer
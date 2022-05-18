import React, {useState} from 'react';
import {View, Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

  
const Offer= () => {

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


  return (
       <View style={styles.container}>
      <Text style={styles.text} > حدد العرض الذي تود استغلاله من القائمة</Text>
      <View style={{top:-180,height:32,width:330,position :'relative'}} >
      <DropDownPicker style={styles.droplist}
          open={Open1}
          value={value1}
          items={numbers}
          setOpen={setOpen1}
          setValue={setValue1}
          setItems={setNumbers}
        />
              <Text style={styles.text2} > حدد عدد مرات استغلال العرض</Text>

        <TextInput style={styles.textinput}

         placeholder="عدد مرات استغلال العرض"

/>

      </View>

      <TouchableOpacity
        style={{left:-12,backgroundColor:"#9A4726", paddingVertical:-32,top:120,height:42,width:330,marginLeft:25,borderRadius:5,position:'relative'}}>
        <Text style={{textAlign:'center',color:"white",borderColor:"#FDE9D9",fontSize:20,top:8}} >تأكيد</Text>
       </TouchableOpacity>
     
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

},

textinput:{
    height:53,
    width:330,
    marginLeft:0.8,
    position:'relative',
    borderColor:'#9A4726',
    top:69,
    borderRadius:10,
    borderWidth:1,
    textAlign:'center'
},

text:{

  borderRadius:10,
  top:-196,
  height:44,
  width:326,
  fontSize:17,
  fontWeight:'500',
  padding:10,
  textAlign:'center',
  color:"#9A4726",
},

text2:{

  borderRadius:10,
  bottom:-45,
  height:44,
  width:326,
  fontSize:17,
  fontWeight:'500',
  padding:10,
  textAlign:'center',
  color:"#9A4726",
},

droplist:{
    height:32,
    width:330,
    marginLeft:0.8,
    position:'relative',
    borderColor:'#9A4726',
    top:2
}


});
export default Offer
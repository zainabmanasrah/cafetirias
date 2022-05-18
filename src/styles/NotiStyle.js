import { StyleSheet } from 'react-native';
const NotiStyle = StyleSheet.create({

root:{
  backgroundColor:'rgb(250, 244, 238)',
  display: "flex",
  flexDirection: 'column',
  alignItems:'center',
  width: 428,
  
  },


  text: {
    marginTop: 8,
    color:'rgb(154, 71, 38)',
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 25,
    alignSelf:'flex-end',
    backgroundColor:'#FFFFFF',
    borderColor: 'rgb(154, 71, 38)',
    borderWidth:1,
    shadowColor:'rgb(154, 71, 38)',
    marginRight:75,
    width:290,
    height:90,
    textAlign:'center',
marginTop:10 ,
padding:30 ,
},


image: {
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
        height:105,
        width:445,
        position:'absolute',
        alignItems:'flex-start',
  
},
   
inputfield:{
  width:190,
  height:45,
  marginTop:105,
  borderWidth:1,
  fontStyle:'normal',
  paddingVertical:0,
  paddingHorizontal:25,
  color:'rgb(112, 112, 112)',
  borderColor: 'rgb(154, 71, 38)',
  borderWidth:1,
  marginRight:190,
  textAlign:'right',
  backgroundColor:'rgb(255,255, 255)',


},
      

inputfield1:{
    width:180,
    height: 45,
    marginTop:-45,
    borderWidth:1,
    fontStyle:'normal',
    paddingVertical:0,
    paddingHorizontal:17,
    color:'rgb(112, 112, 112)',
    borderColor: 'rgb(154, 71, 38)',
    borderWidth:1,
    marginRight:160,
    textAlign:'right',
    flexDirection:'row-reverse',
    borderColor: 'rgb(154, 71, 38)',
    borderWidth:1,
    backgroundColor:'rgb(255,255, 255)',
  },
 
 

 

});

export {NotiStyle}

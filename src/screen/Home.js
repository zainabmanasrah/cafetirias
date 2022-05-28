import { HomeStyle } from '../styles/HomeStyle'//import external stylesheet file 
import {Image,View,Text,TextInput,} from 'react-native'//import image ,view ,text component from react native 
// define function called home which is return the shown component.
import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
const Home = ({navigation}) => {
  

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      navigation.navigate('Second')
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
return (
  
<View 
      onLayout={onLayoutRootView} style={HomeStyle.root}>
      <Entypo name="rocket" size={30} />

<Image
  style={HomeStyle.image}
  source={require('../assets/cafe.png')}
/>

<Text style={{textAlign:'right',color:'#9A4726',fontSize:18,marginTop:50,marginRight:20}}>
 شكرا لك على استخدام تطبيقنا ❤️.
 {"\n"}
 {"\n"}

نأمل أن نجعل تجربتك أكثر راحة وأسرع عند الشراء من
{"\n"}

  كافيتريا جامعتنا.
{"\n"}
{"\n"}

ابق معنا لتحصل على الكثير من العروض و
لاستخدام ميزة النقاط الرائعة.
{"\n"}

{"\n"}
كل جيدًا ، اعتني بنفسك واحصل على
الكثير من الذكريات السعيدة.</Text>
</View>
)

 }

 export default Home;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home';
import Point from './src/screen/point';
import Transmision from './src/screen/transmision';
import Pay from './src/screen/pay';
import CustomerReg from './src/screen/customerreg';
import Customerhome from './src/screen/customerhome';
import Helpcenter from './src/screen/Helpcenter';
import PrivacySeller from './src/screen/PrivacySeller';
import PrivacyCustomer from './src/screen/PrivacyCustomer';
import AdsAndOfferCustomer from './src/screen/AdsAndOfferCustomer';
import AdsAndOfferSeller from './src/screen/AdsAndOfferSeller';
import SettingCustomer from './src/screen/SettingCustomer';

import SettingSeller from './src/screen/SettingSeller';
import Second from './src/screen/Second';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreencustomer from './src/screen/loginscustomer';
import Sellerhomes from './src/screen/Sellerhomes';
import Withdraw from './src/screen/withdraw';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './src/component/loader';
import Paybyoffer from './src/screen/Pay by offer';
import Transfers from './src/screen/Transfers';
import Offer from './src/screen/offerpage';
import PointOffer from './src/screen/pointoffer';
import Qrcodesseller from './src/screen/QrCodesseller';
import Qrcodecustomer from './src/screen/Qrcodecustomer';
import Qrcodescustomer from './src/screen/Qrcodescustomer';
import Qrcodeseller from './src/screen/Qrcodeseller';
import LoginSeller from './src/screen/loginSeller';
import SellerReg from './src/screen/sellerreg';
const Stack = createStackNavigator();
const App = () => {
  

  const [initialRouteName, setInitialRouteName] = React.useState('Second');

  React.useEffect(() => {
    setTimeout(() => {
      //authUser();
    }, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (userData.loggedIn) {
          setInitialRouteName('Customerhome');
        } else {
          setInitialRouteName('LoginScreencustomer');
        }
      } else {
        setInitialRouteName('CustomerReg');
      }
    } catch (error) {
      setInitialRouteName('CustomerReg');
    }
  };
  return (  
    <NavigationContainer>
      {!initialRouteName ? (
        <Loader visible={true} />
      ) : (
        <>
        
          <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="CustomerReg"
              component={CustomerReg}
            />
            <Stack.Screen
              name="LoginScreencustomer"
              component={LoginScreencustomer}
            />
            <Stack.Screen
              name="Customerhome"
              component={Customerhome}
            />
            <Stack.Screen name="Helpcenter" component={Helpcenter} />
<Stack.Screen name='AdsAndOfferSeller' component={AdsAndOfferSeller} />
<Stack.Screen name='AdsAndOfferCustomer' component={AdsAndOfferCustomer} />

<Stack.Screen name='Qrcodeseller' component={Qrcodeseller} />
<Stack.Screen name='Qrcodecustomer' component={Qrcodecustomer} />
<Stack.Screen name='SettingSeller' component={SettingSeller} />
<Stack.Screen name='SettingCustomer' component={SettingCustomer} />

<Stack.Screen name='Transmision' component={Transmision} />
<Stack.Screen name='Point' component={Point} />
<Stack.Screen name='Sellerhomes' component={Sellerhomes} />
<Stack.Screen name='Offer' component={Offer} />
<Stack.Screen name='PointOffer' component={PointOffer} />
<Stack.Screen name='Transfers' component={Transfers} />
<Stack.Screen name='Paybyoffer' component={Paybyoffer} />
<Stack.Screen name='PrivacySeller' component={PrivacySeller} />
<Stack.Screen name='PrivacyCustomer' component={PrivacyCustomer} />

<Stack.Screen name='Pay' component={Pay} />
<Stack.Screen name='Qrcodesseller' component={Qrcodesseller} userType={'student'} />
<Stack.Screen name='Qrcodescustomer' component={Qrcodescustomer} userType={'seller'} />
<Stack.Screen name='Second' component={Second} />
<Stack.Screen name='LoginSeller' component={LoginSeller} />
<Stack.Screen name='Withdraw' component={Withdraw} />
<Stack.Screen name='SellerReg' component={SellerReg} />

<Stack.Screen name='Home' component={Home} />



          </Stack.Navigator>
          


        </>
      )}
      
    </NavigationContainer>
    
  );
 
};


export default App;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home';
import Point from './src/screen/point';
import Transmision from './src/screen/transmision';
import Pay from './src/screen/pay';
import CustomerReg from './src/screen/customerreg';
import Customerhome from './src/screen/customerhome';
import Helpcenter from './src/screen/Helpcenter';
import Privacy from './src/screen/Privacy';
import AdsAndOffer from './src/screen/AdsAndOffer';
import Setting from './src/screen/Setting';
import Qrcode from './src/screen/Qrcode';
import Second from './src/screen/Second';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screen/logins';
import Sellerhomes from './src/screen/Sellerhomes';
import Withdraw from './src/screen/withdraw';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './src/component/loader';
import Paybyoffer from './src/screen/Pay by offer';
import Transfers from './src/screen/Transfers';
import Offer from './src/screen/offerpage';
import PointOffer from './src/screen/pointoffer';
import Help from './src/screen/help';
import Qrcodes from './src/screen/QrCodes';
const Stack = createStackNavigator();
const App = () => {
    return ( 
      <AdsAndOffer / >
    );
    /*
  const [initialRouteName, setInitialRouteName] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      authUser();
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
          setInitialRouteName('LoginScreen');
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
              name="LoginScreen"
              component={LoginScreen}
            />
            <Stack.Screen
              name="Customerhome"
              component={Customerhome}
            />
            <Stack.Screen name="Helpcenter" component={Helpcenter} />
<Stack.Screen name='AdsAndOffer' component={AdsAndOffer} />
<Stack.Screen name='Qrcode' component={Qrcode} />
<Stack.Screen name='Setting' component={Setting} />
<Stack.Screen name='Transmision' component={Transmision} />
<Stack.Screen name='Point' component={Point} />
<Stack.Screen name='Sellerhomes' component={Sellerhomes} />
<Stack.Screen name='Offer' component={Offer} />
<Stack.Screen name='PointOffer' component={PointOffer} />
<Stack.Screen name='Transfers' component={Transfers} />
<Stack.Screen name='Paybyoffer' component={Paybyoffer} />
<Stack.Screen name='Privacy' component={Privacy} />



          </Stack.Navigator>
          


        </>
      )}
      
    </NavigationContainer>
    
  );
 
*/
};


export default App;
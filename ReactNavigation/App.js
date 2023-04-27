import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // fragmentTag : 두개의 루트 컴포넌트를 감싸주는 역할
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealsCategories" 
        // 모든 화면에 옵션을 변경하는 것
        screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor : 'white',
            contentStyle: {backgroundColor: '#351401'}
        }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} 
          options={{
            title: 'All Categories',
            // headerStyle: { backgroundColor: '#351401' },
            // headerTintColor : 'white',
            // contentStyle: {backgroundColor: '#351401'}
          }} />
          <Stack.Screen name="MealsOverviewScreen" component={MealsOverViewScreen}
          // navigation의 이름을 동적으로 받는 방법 1.route를 활용한다.
          // react navigation의 경우 route와 navigation 2가지를 prop으로 받는다.
          // 이전에 categories Screen에서 route에 저장한 정보를 params로 꺼내올 수 있다.
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

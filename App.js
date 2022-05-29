import React, { Component } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppContainer from "./app/containers/AppContainer";
import PeopleDetail from "./app/components/PeopleDetail";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import peopleReducer from "./app/redux/reducers/peopleReducer";
import PeopleList from "./app/components/PeopleList";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(peopleReducer);

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerTitle: '', headerTransparent: true }}
          >
            <Stack.Screen name="AppContainer" component={AppContainer} options={{ headerShown: false }} />
            <Stack.Screen component={PeopleList} name='PeopleList' />
            <Stack.Screen component={PeopleDetail} name='PeopleDetail' />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
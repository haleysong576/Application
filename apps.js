
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config' )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded({extended: true}));
//app.use(express.json());
 

//Import routes

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute); 


//ROUTES  
app.get('/', (req, res) => {
    res.send('We are on home');
});

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,  
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
);


app.listen(3000);


import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//screens
import MainScreen from './screens/MainScreen';
import InfoMenuScreen from './screens/4Menus/InfoMenuScreen';
import SettingScreen from './screens/4Menus/SettingScreen';
import DailyTrackerScreen from './screens/4Menus/DailyTrackerScreen';
import RecipeScreen from './screens/4Menus/RecipeScreen';
import DailyInput from'./screens/4Menus/DailyInput';
import Notification from './screens/4Menus/Notificaton';
import Password from './screens/4Menus/Password';
import ViewAminoAcids from './screens/4Menus/ViewAminoAcids';
import PasswordBack from './screens/4Menus/PasswordBack';
import Chili from './screens/Recipes/Chili';
import Bibimbop from './screens/Recipes/Bibimbop';
import OatmealPancakes from './screens/Recipes/OatmealPancakes';
import VeganBurger from './screens/Recipes/VeganBurger';
import VegeterianBurritoBowls from './screens/Recipes/VegeterianBurritoBowls'

class HomeScreen extends Component{
  static navigationOptions = {
    header: null
  }
  state = { username: "", password: "" }

  checkLogin() {
    const { username, password } = this.state
    if(username == 'haley' && password == 'haley'){
      return true;
    }
    else {
      return false;
    }
  }
  onPressButton() {
    if (this.checkLogin() == true){
      this.props.navigation.navigate('Main');
      this.userInput.clear();
      this.pwInput.clear();
    }
    else {
      console.warn("Login Failed")
    }
  }
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style = {styles.title}>Amino Tracker</Text>
        <TextInput ref={input => { this.userInput = input }} style = {styles.label} placeholder="Username" underlineColorAndroid = {'gray'} onChangeText = {text => this.setState ({username: text })}/>
        <TextInput ref={input => { this.pwInput = input }} style = {styles.label} placeholder="Password" underlineColorAndroid = {'gray'} secureTextEntry={true} onChangeText = {text => this.setState ({password: text })}/>
        <View style = {styles.button}>
          <Button 
          onPress = {() => this.onPressButton()}
          title = "Log in"
          />
        </View>
      </View>
    );
  }
}




const RootStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Main: {screen: MainScreen},
    InfoMenu: {screen: InfoMenuScreen},
    Settings: {screen: SettingScreen},
    DailyTracker: {screen: DailyTrackerScreen},    
    Recipe: {screen: RecipeScreen},
    Chili: {screen: Chili},
    DailyInput: {screen: DailyInput},
    Notification: {screen: Notification},
    Password: {screen: Password},
    ViewAminoAcids: {screen: ViewAminoAcids},
    PasswordBack: {screen: PasswordBack},
    VeganBurger: {screen: VeganBurger},
    VegeterianBurritoBowls: {screen: VegeterianBurritoBowls},
    Bibimbop: {screen: Bibimbop},
    OatmealPancakes: {screen: OatmealPancakes}
  },
  
);

const AppContainer = createAppContainer(RootStack);


export default class registration extends Component {
  
  render() {
    return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },
  label: {
    alignSelf: 'stretch',
    fontSize: 20,
    padding: 20,
    color: 'black',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'black'
  },
  button: {
    marginBottom: 100,
    marginTop: 30,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  }
});

import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import db from './config.js';
import HomeScreen from './components/Homescreen';
import SummaryScreen from './components/SummaryScreen';


import {
  createAppContainer,createSwitchNavigator,simpleAlertHandler
} from 'react-navigation';

export default class App extends React.Component{

showStudents = () => {
    var all_students = []
    var class_ref = db.ref('/')

      class_ref.on('value', data =>{
        var all_students = []
        var class_a = data.val().classA;
          
        for (var i in class_a) {
            all_students.push(class_a[i]);
        }
          all_students.sort(function(a,b) {
            return a.roll_no - b.roll_no;
        });
        this.setState({ all_students : all_students});
      })
}

updateAttendance(roll_no, status) {
  var id = '';

  if (roll_no <= 9) {
    id = '0' + roll_no;
  } 
  else {
    id = roll_no;
  }        

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = dd + '-' + mm + '-' + yyyy;
  var ref_path = id;
  var class_ref =db.ref(ref_path);
  class_ref.update({
    [today] : status,
  });
}

 ComponentDidMount(){
    this.showStudents
  }

  render(){
    return(

    <View style = {{flex : 1}}>
    <AppContainer />
    <updateAttendance />
    <showStudents />
    </View>

      
    )
  }
}


var AppNavigator = createSwitchNavigator ({
    Homescreen: HomeScreen,
    // Summaryscreen : SummaryScreen
}) 

const AppContainer = createAppContainer(AppNavigator)



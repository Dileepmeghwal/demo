import React from "react";
import { View, StatusBar, StyleSheet, Text, Button, Platform } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
      backgroundColor="red"
      // barStyle={"dark-content"}
      hidden={false}

      />
      <Button title="Click" />
      {
        Platform.OS =="android" ?
        <View style={{width:200, height:200, backgroundColor:'blue'}}></View>
        :
        <View style={{width:200, height:200, backgroundColor:'black'}}></View>
      }

<Text style={styles.text}>Hello</Text>
      
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center'
  },
  text:{
    color:Platform.OS=="android" ? 'green':"blue",
    fontSize:30,
    
  }
})
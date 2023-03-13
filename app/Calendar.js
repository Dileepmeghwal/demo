import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ViewBase } from "react-native";
import { Agenda } from "react-native-calendars";

const Calendar = () => {
  const [item, setItem] = useState({
    "2023-02-13": [{ name: "test 1", cookies: true }],
    "2023-02-19": [{ name: "test 1", cookies: false }],
  });
  const renderItem = (item) => {
    return (
      <View style={styles.container}>
        <Text style={{color:"#000"}}>{item.name}</Text>
        <Text style={{color:"#000"}}>{item.cookies ? "🍪" : "❤️"}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <Agenda item={item} renderItem={renderItem} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
    }
})
 export default Calendar;
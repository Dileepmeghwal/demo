import React, { useState } from "react";
import { SafeAreaView, Button, Text, View } from "react-native";
import Calendar from "./app/Calendar";
import { Agenda } from "react-native-calendars";

export default function App() {
  return (
    <View style={styles.container}>
      <Calendar
        markingType={"period"}
        markedDates={{
          "2012-05-15": { marked: true, dotColor: "#50cebb" },
          "2012-05-16": { marked: true, dotColor: "#50cebb" },
          "2012-05-21": {
            startingDay: true,
            color: "#50cebb",
            textColor: "white",
          },
          "2012-05-22": { color: "#70d7c7", textColor: "white" },
          "2012-05-23": {
            color: "#70d7c7",
            textColor: "white",
            marked: true,
            dotColor: "white",
          },
          "2012-05-24": { color: "#70d7c7", textColor: "white" },
          "2012-05-25": {
            endingDay: true,
            color: "#50cebb",
            textColor: "white",
          },
        }}
      />
    </View>
  );
}

const styles = (StyleSheet = {
  container: {
    flex: 1,
    backgroundColor: "grey",
    marginTop: 40,
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
  },
});

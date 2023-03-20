import React, { useState } from "react";
import {
  SafeAreaView,
  Button,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import Calendar from "react-native-calendars/src/calendar";
import SwitchButton from "./app/SwitchButton";

const App = () => {
  const [showModal, setshowModal] = useState(false);
  const [events, setEvents] = useState([
    {
      start: '2023-03-16 00:00:00',
      end: '2023-03-17 02:00:00',
      title: 'New Year Party',
      summary: 'xyz Location',
    },
    
  ]);

  const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" };
  const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
  const workout = { key: "workout", color: "green" };
  return (
    // <View style={styles.container}>
    //   <TouchableOpacity
    //     onPress={() => setshowModal(true)}
    //     style={{
    //       backgroundColor: "black",
    //       borderRadius: 10,
    //       margin: 40,
    //       padding: 10,
    //       width: 200,
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text style={{ color: "#fff", fontSize: 15 }}>Show Calendar</Text>
    //   </TouchableOpacity>
    //   <Modal visible={showModal} animationType="fade">
    //     <Calendar
    //       style={{ padding: 20, margin: 20, elevation: 4, borderRadius: 10 }}
    //       onDayPress={(date) => {
    //         alert(date);
    //         setshowModal(false);
            
    //       }}
    //       initialDate={"2023-03-15"}
    //       hideExtraDays={true}
    //       // markedDates={{
    //       //   "2023-03-15": {marked: true, dotColor: 'blue', selected:true, selectedColor: 'purple',selectedTextColor: '#fff', }
    //       // }}
    //       // markingType={'multi-dot'}
    //       // markedDates={{
    //       //   "2023-03-17":{dots:[{color:'red'}, {color:'green'}]}
    //       // }}

    //       markingType={"multi-dot"}
    //       markedDates={{
    //         "2023-03-15": {
    //           dots: [vacation, massage, workout],
    //           selected: true,
    //           selectedColor: "red",
    //         },
    //         "2023-03-26": { dots: [massage, workout], disabled: true },
    //       }}
    //     />
    //     <Text>{events.title}</Text>
    //   </Modal>
    // </View>

    <SwitchButton />
  );
};

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
export default App;

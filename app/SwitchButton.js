import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

const SwitchButton = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
      }}
    >
      <View
        style={{
          width: "90%",
          height: 55,
          borderWidth: 0.5,
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#999",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <TouchableOpacity
          style={{
            width: "50%",
            height: "96%",
            backgroundColor: selectedTab == 0 ? "blue" : "white",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Text
            style={{ color: selectedTab == 0 ? "#fff" : "#000", fontSize: 20 }}
          >
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "50%",
            height: "96%",
            backgroundColor: selectedTab == 1 ? "blue" : "white",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Text
            style={{
              color: selectedTab == 1 ? "#fff" : "#000",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Completed
          </Text>
        </TouchableOpacity>

        {selectedTab == 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{color:"#000"}}>pending</Text>
          </View>
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{color:"#000"}}>Completed</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SwitchButton;

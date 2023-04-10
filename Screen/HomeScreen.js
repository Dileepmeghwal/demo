import React from "react";
import { View, Text, Switch } from "react-native";
import { useTheme } from "../ThemeProvider";

const HomeScreen = () => {
  const [dark, colors, setScheme] = useTheme();
  const toggle = () => {
    dark ? setScheme("light") : setScheme("dark");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
      }}
    >
      <Switch value={dark} onValueChange={toggle} />
      <Text style={[styles.text, { color: colors.text }]}>Hello, Welcome</Text>
    </View>
  );
};

export default HomeScreen;

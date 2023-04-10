import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const country = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
];

const DropDown = () => {
  const [select, setSelect] = useState("Please Select");
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(country);

  const [search, setSearch]=useState('');
const onSearch=(text)=>{
    let temp = data.filter((item) =>{
        return item.name.localeCompare
    })
}
  return (
    <View style={styles.container} >
      <TouchableOpacity
        style={styles.dropDown}
        onPress={() => setIsClicked(!isClicked)}
      >
        <Text>{select}</Text>
        {isClicked ? (
          <MaterialIcons name="keyboard-arrow-up" size={25} color={"#999"} />
        ) : (
          <MaterialIcons name="keyboard-arrow-down" size={25} color={"#999"} />
        )}
      </TouchableOpacity>
      {isClicked && (
        <View style={styles.dropDownContainer}>
            <TextInput placeholder="search"
            style={{
                borderWidth:1,
                borderColor:'grey',
                paddingHorizontal:10,
                paddingVertical:10,
                marginBottom:5,
                borderRadius:6,
                marginHorizontal:20,
                
            }} />
          <FlatList
            ItemSeparatorComponent={<View style={{ color: "#999" }} />}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelect(item.name), setIsClicked(false);
                  }}
                  style={{
                    width: "90%",
                    height: 50,
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingVertical: 5,
                  }}
                >
                  <View>
                    <Text
                      key={item.index}
                      style={{
                        color: "#999",
                        fontSize: 15,
                        paddingHorizontal: 5,
                        paddingVertical: 10,
                        height: 50,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  dropDown: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    height: 50,
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    marginTop: 100,
  },
  dropDownContainer: {
    width: "90%",
    backgroundColor: "#ffffffff",
    borderRadius: 6,
    marginTop: 5,
    elevation: 3,
    marginBottom: 10,
  },
});

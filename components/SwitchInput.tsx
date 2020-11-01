import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Picker } from "@react-native-community/picker";

type SwitchInputProps = {
  label: string;
  totalKilometers: number;
};

function SwitchInput({ label, totalKilometers }: SwitchInputProps) {
  const calculateEven = (value: number) => {
    return Math.round(value / 3);
  };

  const [value, setValue] = useState(0);
  const [edit, setEdit] = useState(false);
  const [pickerLabel, setPickerLabel] = useState("disable");

  const inputOrText = () => {
    if (edit) {
      return (
        <TextInput
          placeholder="Add Item"
          // style={styles.itemText}
          onSubmitEditing={() => {}}
          onChangeText={(text: string) => setValue(parseInt(text))}
          value={value.toString()}
        ></TextInput>
      );
    }
    return <Text style={styles.label}>{value}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {inputOrText()}
      <Picker
        selectedValue={pickerLabel}
        style={{ height: 50, width: 120 }}
        onValueChange={(itemValue, itemIndex) => {
          console.log("picker value changed: " + itemValue);
          switch (itemValue) {
            case "disable":
              setValue(0);
              break;
            case "even":
              setValue(calculateEven(totalKilometers));
              setPickerLabel("even");
              break;
            case "custom":
              setEdit(true);
              setPickerLabel("custom");
              break;
          }
        }}
      >
        <Picker.Item label="Even" value="even" />
        <Picker.Item label="Disable" value="disable" />
        <Picker.Item label="Custom" value="custom" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    textAlign: "center",
    paddingRight: 20,
    paddingLeft: 20,
    // borderColor: "#7a42f4",
    // borderWidth: 1,
    // borderRadius: 10,
  },
});

export default SwitchInput;

import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

type NumberInputProps = {
  label: string;
  onChange: (value: number) => void;
};

function NumberInput({ label, onChange }: NumberInputProps) {
  const [input, setInput] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
            setInput(parseInt(text));
            onChange(parseInt(text));
        }}
        value={input ? input.toString() : "0"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  label: {
    textAlign: "center",
    borderColor: "#7a42f4",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    textAlign: "center",
    borderColor: "#7a42f4",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default NumberInput;

import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput } from "react-native";
import SummarizeModal from "./SummarizeModal";
import TripModal from "./TripModal";

type ControlMenuProps = {
  add: (count?: number) => void;
  reset: () => void;
  setupCurrent: (count?: number) => void;
  currentKilometers: number;
};

type Data = {
  input?: number;
  tripModalVisible: boolean;
  summarizeModalVisible: boolean;
};

function ControlMenu({
  add,
  reset,
  setupCurrent,
  currentKilometers,
}: ControlMenuProps) {
  const [data, setData] = useState<Data>({
    input: 0,
    tripModalVisible: false,
    summarizeModalVisible: false,
  });

  const toggleTripModal = () => {
    setData({
      input: data.input,
      tripModalVisible: !data.tripModalVisible,
      summarizeModalVisible: data.summarizeModalVisible,
    });
  };

  const toggleSummarizeModal = () => {
    setData({
      input: data.input,
      tripModalVisible: data.tripModalVisible,
      summarizeModalVisible: !data.summarizeModalVisible,
    });
  };

  return (
    <View style={styles.centeredView}>
      <TripModal
        visible={data.tripModalVisible}
        toggleTripModal={toggleTripModal}
        add={add}
        currentKilometers={currentKilometers}
      />
      <SummarizeModal
        visible={data.summarizeModalVisible}
        toggleSummarizeModal={toggleSummarizeModal}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setData({
              input: parseInt(text),
              tripModalVisible: data.tripModalVisible,
              summarizeModalVisible: data.summarizeModalVisible,
            })
          }
          value={data.input ? data.input.toString() : "0"}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            setupCurrent(data.input);
            setData({
              input: 0,
              tripModalVisible: data.tripModalVisible,
              summarizeModalVisible: data.summarizeModalVisible,
            });
          }}
          title="Setup"
        />
        <Button onPress={() => reset()} title="Reset" />
        <Button onPress={() => toggleTripModal()} title="Trip" />
        <Button
          onPress={() => console.log("pressed Summarize button")}
          title="Summarize"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 100,
  },
  input: {
    margin: 15,
    height: 30,
    width: 50,
    borderColor: "#7a42f4",
    borderWidth: 2,
    textAlign: "center",
    fontSize: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

export default ControlMenu;

import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";
import NumberInput from "./NumberInput";
import SwitchInput from "./SwitchInput";

type TripModalProps = {
  currentKilometers: number;
  visible: boolean;
  toggleTripModal: () => void;
  add: (kilometers: number) => void;
};

function TripModal({ currentKilometers, visible, toggleTripModal, add }: TripModalProps) {
  const [data, setData] = useState({
    visible: false,
    endKilometers: 0,
    totalKilometers: 0,
  });

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          toggleTripModal();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <NumberInput
              label="End kilometers"
              onChange={(kilometers) => {
                console.log('kilometers: ' + kilometers);
                
                if (kilometers > currentKilometers) {
                  const totalKilometers = kilometers - currentKilometers;
                  console.log('totalKilometers: ' + totalKilometers);
                  setData({
                    visible: data.visible,
                    endKilometers: kilometers,
                    totalKilometers: totalKilometers
                  });
                }
              }}
            />
            <SwitchInput label="Jakub" totalKilometers={data.totalKilometers} />
            <SwitchInput
              label="Michał"
              totalKilometers={data.totalKilometers}
            />
            <SwitchInput
              label="Daniel"
              totalKilometers={data.totalKilometers}
            />
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                add(data.endKilometers);
                toggleTripModal();
              }}
            >
              <Text style={styles.textStyle}>Submit Trip</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default TripModal;

import React from "react";
import { Modal, View, StyleSheet } from "react-native";

type SummarizeModalProps = {
    visible: boolean;
    toggleSummarizeModal: () => void;
  };

function SummarizeModal({visible, toggleSummarizeModal} : SummarizeModalProps) {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => toggleSummarizeModal()}
      >
        <View style={styles.centeredView}></View>
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
    }
});

export default SummarizeModal;

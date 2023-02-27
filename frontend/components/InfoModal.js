import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";

const InfoModal = ({ visible, onClose, message }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
          <TouchableHighlight style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

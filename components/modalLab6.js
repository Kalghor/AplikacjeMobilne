import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";


const App = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
          // console.log(modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          {/* {console.log("------------modal-----------")} */}

            {/* {console.log(typeof(props.subjects))} */}
                {props.subjects.map((obj, index) => (
                        <View id={index}>                     
                           <Text style={styles.modalText}>{obj}</Text>
                        </View>
                    ))}
                    {/* <Button onPress={props.toggleAddExpense} title="wróc" /> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
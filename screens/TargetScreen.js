import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { FAB } from 'react-native-paper';
import FlatListBasics from '../components/TargetsList';


import AddTarget from '../components/AddTarget';
import ModifyTarget from '../components/ModifyTarget';


const TargetScreen = () => {

    const baseUrl = "http://192.168.0.27:8080/app"; 
    const [targets, setTergets] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModifyModal, setShowModifyModal] = useState(false);


    const toggleAddExpense = (name) => {
        setShowModal(!showModal);
        console.log(name);
    }

    const toggleModifyModal = () => {
      setShowModifyModal(!showModifyModal);
  }

    const refreshData = () => {
            fetch(baseUrl + "/getTargetList")
            .then(response => {
                return response.json();
            }).then(responseData => {
                setTergets(responseData);
                
            }).catch(err => {
                console.log(err);
            })
    }
   

    return (
        <View style={styles.container}>
        {!showModal ?
            <View>
                <FlatListBasics data={targets} refreshList={() => refreshData()} toggleModal={() => toggleModifyModal()} />
                {!showModifyModal ? <Button onPress={() => refreshData()} title='Odśwież' /> : <View></View>}
            </View>
            : 
            <View></View>
         }

        {showModal ?
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={toggleAddExpense}
      />
      : <View></View>
      }
            <FAB
        style={styles.fab}
        icon="plus"
        onPress={toggleAddExpense}
      />
      {showModal ? <AddTarget refreshData={refreshData}/> : <View></View>}
      {showModifyModal ? <ModifyTarget /> : <View></View>}
        </View> 
    )
    

}

export default TargetScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#FFA07A',
        marginRight: 10,
        marginTop: 30
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#c7c7c7',
      },
      categoryCard: {
        height: 90, 
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      accountBalanceCard: {
        height: 70, 
        margin: 10,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 5
      },
      cardContainer: {
        flex: -1,
        flexDirection: 'column'
      }
})

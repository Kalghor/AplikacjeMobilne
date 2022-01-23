import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { FAB } from 'react-native-paper';
import TransactionCard from '../components/TransactionCard';


import AddTransaction from '../components/AddTransaction';
import ModifyTarget from '../components/ModifyTarget';


const TargetScreen = () => {

    const baseUrl = "http://192.168.0.27:8080/app"; 
    const [transactions, setTransactions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModifyModal, setShowModifyModal] = useState(false);


    const toggleAddExpense = () => {
        setShowModal(!showModal);
    }

    const toggleModifyModal = () => {
      setShowModifyModal(!showModifyModal);
  }

    const refreshData = () => {
            fetch(baseUrl + "/getTransaction")
            .then(response => {
                return response.json();
            }).then(responseData => {
                setTransactions(responseData);
                
            }).catch(err => {
                console.log(err);
            })
    }
   

    return (
        <View style={styles.container}>
        {!showModal ?
            <View>
               {transactions.map((obj, id) => (
                    <View style={styles.cardContainer}>  
                        <View >
                            <TransactionCard text={id} style={styles.categoryCard} name={obj.name} value={obj.value} date={obj.date}/>
                        </View>
                    </View>
                ))}
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
      {showModal ? <AddTransaction refreshData={refreshData}/> : <View></View>}
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
